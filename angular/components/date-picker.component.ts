import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'DatePicker, datepicker',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<input class="ns-datepicker" type="date" [value]="valueStr" (input)="onInput($event)" />`,
	styles: [
		`
			.ns-datepicker {
				padding: 6px 8px;
			}
		`,
	],
})
export class DatePickerComponent {
	@Input() date?: string | Date;
	@Output() dateChange = new EventEmitter<string | Date>();
	@Output() change = new EventEmitter<string | Date>();

	get valueStr(): string {
		if (!this.date) return '';
		const d = typeof this.date === 'string' ? new Date(this.date) : this.date;
		if (Number.isNaN(d.getTime())) return '';
		const pad = (n: number) => (n < 10 ? `0${n}` : String(n));
		return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
	}

	onInput(e: Event) {
		const v = (e.target as HTMLInputElement).value;
		this.dateChange.emit(v);
		this.change.emit(v);
	}
}

