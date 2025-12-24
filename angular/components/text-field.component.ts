import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'TextField, textfield',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<input
			class="ns-textfield"
			type="text"
			[value]="text ?? ''"
			(input)="onInput($event)"
			(keyup.enter)="onSubmit($event)"
		/>
	`,
	styles: [
		`
			.ns-textfield {
				width: 100%;
				padding: 6px 8px;
			}
		`,
	],
})
export class TextFieldComponent {
	@Input() text?: string;
	@Output() textChange = new EventEmitter<string>();
	@Output() submit = new EventEmitter<string>();

	onInput(e: Event) {
		this.textChange.emit((e.target as HTMLInputElement).value);
	}

	onSubmit(e: KeyboardEvent) {
		this.submit.emit((e.target as HTMLInputElement).value);
	}
}

