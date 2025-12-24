import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

function projectPath(p: string) {
	return path.join(process.cwd(), p);
}

function getVueComponentNames(): string[] {
	const content = readFileSync(projectPath('core/index.ts'), 'utf8');
	const names = Array.from(content.matchAll(/import\s+[A-Za-z0-9_]+\s+from\s+'\.\/components\/([^']+)\.vue';/g)).map(
		(m) => m[1]
	);
	return names.sort();
}

function getAngularComponentKeys(): string[] {
	const content = readFileSync(projectPath('angular/components/index.ts'), 'utf8');
	const blockMatch = content.match(/export const components = \{\n([\s\S]*?)\n\};/m);
	if (!blockMatch) return [];
	const block = blockMatch[1];
	const keys = Array.from(block.matchAll(/^\s*([A-Za-z0-9_]+)\s*:/gm)).map((m) => m[1]);
	return keys.sort();
}

describe('framework component parity', () => {
	it('angular components expose the same keys as vue core components', () => {
		const vue = getVueComponentNames();
		const angular = getAngularComponentKeys();
		expect(angular).toEqual(vue);
	});
});
