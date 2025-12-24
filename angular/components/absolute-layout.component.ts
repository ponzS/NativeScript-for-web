import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'AbsoluteLayout, absolutelayout',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-absolute"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-absolute {
				position: relative;
				width: 100%;
				height: 100%;
			}
		`,
	],
})
export class AbsoluteLayoutComponent {}
