import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'HtmlView, htmlview',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	template: `
		<div class="ns-htmlview" *ngIf="html; else projected" [innerHTML]="html"></div>
		<ng-template #projected><div class="ns-htmlview"><ng-content></ng-content></div></ng-template>
	`,
	styles: [
		`
			.ns-htmlview {
				display: block;
			}
		`,
	],
})
export class HtmlViewComponent {
	@Input() html?: string;
}
