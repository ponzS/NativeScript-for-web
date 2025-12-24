import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'RootLayout, rootlayout',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-root"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-root {
				position: relative;
				width: 100%;
				height: 100%;
				display: block;
			}
		`,
	],
})
export class RootLayoutComponent {}
