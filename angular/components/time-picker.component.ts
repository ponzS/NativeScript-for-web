import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'TimePicker, timepicker',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<input class="ns-timepicker" type="time" [value]="time ?? ''" (input)="onInput($event)" />`,
	styles: [
		`
			.ns-timepicker {
				padding: 6px 8px;
			}
		`,
	],
})
export class TimePickerComponent {
	@Input() time?: string;
	@Output() timeChange = new EventEmitter<string>();
	@Output() change = new EventEmitter<string>();

	onInput(e: Event) {
		const v = (e.target as HTMLInputElement).value;
		this.timeChange.emit(v);
		this.change.emit(v);
	}
}

