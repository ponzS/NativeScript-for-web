import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'TextView, textview',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<textarea class="ns-textview" [value]="text ?? ''" (input)="onInput($event)"></textarea>`,
	styles: [
		`
			.ns-textview {
				width: 100%;
				min-height: 80px;
				padding: 6px 8px;
			}
		`,
	],
})
export class TextViewComponent {
	@Input() text?: string;
	@Output() textChange = new EventEmitter<string>();
	@Output() change = new EventEmitter<string>();

	onInput(e: Event) {
		const v = (e.target as HTMLTextAreaElement).value;
		this.textChange.emit(v);
		this.change.emit(v);
	}
}

