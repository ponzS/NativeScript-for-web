import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'FlexboxLayout, flexboxlayout',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-flex"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-flex {
				display: flex;
			}
		`,
	],
})
export class FlexboxLayoutComponent {}
