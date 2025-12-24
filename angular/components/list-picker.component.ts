import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'ListPicker, listpicker',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	template: `
		<select class="ns-listpicker" [value]="selectedIndex ?? 0" (change)="onChange($event)">
			<option *ngFor="let item of items; let i = index" [value]="i">{{ item }}</option>
		</select>
	`,
	styles: [
		`
			.ns-listpicker {
				padding: 6px 8px;
			}
		`,
	],
})
export class ListPickerComponent {
	@Input({ required: true }) items: string[] = [];
	@Input() selectedIndex?: number;
	@Output() selectedIndexChange = new EventEmitter<number>();
	@Output() change = new EventEmitter<number>();

	onChange(e: Event) {
		const v = Number((e.target as HTMLSelectElement).value);
		this.selectedIndexChange.emit(v);
		this.change.emit(v);
	}
}
