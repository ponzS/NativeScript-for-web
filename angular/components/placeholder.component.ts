import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'Placeholder, placeholder',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-placeholder"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-placeholder {
				display: contents;
			}
		`,
	],
})
export class PlaceholderComponent {}
