import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'Label, label',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	template: `
		<span class="ns-label">
			<ng-container *ngIf="text === undefined || text === null || text === ''; else textTpl">
				<ng-content></ng-content>
			</ng-container>
			<ng-template #textTpl>{{ text }}</ng-template>
		</span>
	`,
	styles: [
		`
			.ns-label {
				display: inline-block;
			}
		`,
	],
})
export class LabelComponent {
	@Input() text?: string;
}
