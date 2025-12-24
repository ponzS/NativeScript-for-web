import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { createWebPlatform } = require('../tools/create-web-platform.cjs') as {
	createWebPlatform: (opts: { projectRoot: string; framework?: 'vue' | 'angular' }) => { framework: string; webDir: string };
};

function makeTempProject(name: string) {
	const root = path.join(os.tmpdir(), `ns-web-adapter-${name}-${Date.now()}`);
	mkdirSync(root, { recursive: true });
	mkdirSync(path.join(root, 'src', 'app'), { recursive: true });
	return root;
}

describe('web platform generation', () => {
	it('auto-detects angular when project depends on @nativescript/angular', () => {
		const root = makeTempProject('detect-angular');
		writeFileSync(
			path.join(root, 'package.json'),
			JSON.stringify({ name: 'x', dependencies: { '@nativescript/angular': '^0.0.0' } }, null, 2)
		);
		writeFileSync(path.join(root, 'src', 'main.ts'), `export {};`);
		writeFileSync(path.join(root, 'src', 'app.css'), `body{}`);
		const res = createWebPlatform({ projectRoot: root });
		expect(res.framework).toBe('angular');
		rmSync(root, { recursive: true, force: true });
	});

	it('generates angular platform with expected entry and patches', () => {
		const root = makeTempProject('angular');
		writeFileSync(
			path.join(root, 'package.json'),
			JSON.stringify({ name: 'x', dependencies: { '@nativescript/angular': '^0.0.0' } }, null, 2)
		);
		writeFileSync(
			path.join(root, 'src', 'main.ts'),
			`import { bootstrapApplication, provideNativeScriptRouter, runNativeScriptAngularApp } from "@nativescript/angular";
import { provideZonelessChangeDetection } from "@angular/core";
import { routes } from "./app/app.routes";
import { AppComponent } from "./app/app.component";
runNativeScriptAngularApp({ appModuleBootstrap: () => bootstrapApplication(AppComponent, { providers: [provideNativeScriptRouter(routes), provideZonelessChangeDetection()] }) });`
		);
		writeFileSync(
			path.join(root, 'src', 'app', 'app.component.ts'),
			`import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { PageRouterOutlet } from '@nativescript/angular';
@Component({ selector: 'ns-app', templateUrl: './app.component.html', imports: [PageRouterOutlet], schemas: [NO_ERRORS_SCHEMA] })
export class AppComponent {}`
		);
		writeFileSync(path.join(root, 'src', 'app', 'app.component.html'), `<GridLayout><page-router-outlet></page-router-outlet></GridLayout>`);
		writeFileSync(path.join(root, 'src', 'app', 'app.routes.ts'), `import { Routes } from '@angular/router'; export const routes: Routes = [];`);
		writeFileSync(path.join(root, 'src', 'app.css'), `body{}`);

		const res = createWebPlatform({ projectRoot: root, framework: 'angular' });
		expect(res.framework).toBe('angular');

		const platformDir = path.join(root, 'platforms', 'angular');
		const indexHtml = readFileSync(path.join(platformDir, 'index.html'), 'utf8');
		expect(indexHtml).toContain('<ns-app>');
		expect(indexHtml).toContain('/src/main.ts');

		const mainTs = readFileSync(path.join(platformDir, 'src', 'main.ts'), 'utf8');
		expect(mainTs).toContain("bootstrapApplication(AppComponent");
		expect(mainTs).not.toContain('runNativeScriptAngularApp');

		const appTs = readFileSync(path.join(platformDir, 'src', 'app', 'app.component.ts'), 'utf8');
		expect(appTs).toContain('nsWebAdapterImports');
		expect(appTs).toContain('...nsWebAdapterImports');
		expect(appTs).toContain('RouterOutlet');

		rmSync(root, { recursive: true, force: true });
	});
});
