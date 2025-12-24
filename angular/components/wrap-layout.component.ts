import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'WrapLayout, wraplayout',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-wrap"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-wrap {
				display: flex;
				flex-wrap: wrap;
			}
		`,
	],
})
export class WrapLayoutComponent {}
