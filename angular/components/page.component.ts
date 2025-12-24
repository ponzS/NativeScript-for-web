import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'Page, page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-page"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-page {
				top: 0;
				left: 0;
				position: absolute;
				width: 100%;
				min-height: 100%;
				padding: 0px;
			}
		`,
	],
})
export class PageComponent {}
