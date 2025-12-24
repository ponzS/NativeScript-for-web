import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'Progress, progress[nsProgress], ns-progress',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<progress class="ns-progress" [value]="value ?? null" [max]="max ?? null"></progress>`,
	styles: [
		`
			.ns-progress {
				width: 100%;
			}
		`,
	],
})
export class ProgressComponent {
	@Input() value?: number;
	@Input() max?: number;
}

