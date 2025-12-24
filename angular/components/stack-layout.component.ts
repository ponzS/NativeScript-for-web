import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'StackLayout, stacklayout',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-stack"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-stack {
				display: flex;
				flex-direction: column;
			}
		`,
	],
})
export class StackLayoutComponent {}
