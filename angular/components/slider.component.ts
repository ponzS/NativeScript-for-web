import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'Slider, slider',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<input
			class="ns-slider"
			type="range"
			[min]="min ?? 0"
			[max]="max ?? 100"
			[step]="step ?? 1"
			[value]="value ?? 0"
			(input)="onInput($event)"
		/>
	`,
	styles: [
		`
			.ns-slider {
				width: 100%;
			}
		`,
	],
})
export class SliderComponent {
	@Input() value?: number;
	@Input() min?: number;
	@Input() max?: number;
	@Input() step?: number;

	@Output() valueChange = new EventEmitter<number>();
	@Output() change = new EventEmitter<number>();

	onInput(e: Event) {
		const v = Number((e.target as HTMLInputElement).value);
		this.valueChange.emit(v);
		this.change.emit(v);
	}
}

