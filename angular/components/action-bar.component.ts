import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ActionBar, actionbar',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<header class="ns-actionbar"><ng-content></ng-content></header>`,
	styles: [
		`
			.ns-actionbar {
				padding: 12px;
			}
		`,
	],
})
export class ActionBarComponent {}
