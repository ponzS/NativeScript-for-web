import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ScrollView, scrollview',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-scroll"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-scroll {
				overflow: auto;
				max-height: 100%;
			}
		`,
	],
})
export class ScrollViewComponent {}
