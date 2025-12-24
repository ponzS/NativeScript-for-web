import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ListView, listview',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<ul class="ns-listview"><ng-content></ng-content></ul>`,
	styles: [
		`
			.ns-listview {
				list-style: none;
				margin: 0;
				padding: 0;
			}
			.ns-listview > li {
				padding: 8px 12px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
			}
		`,
	],
})
export class ListViewComponent {}
