import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'SearchBar, searchbar',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="ns-searchbar">
			<input type="search" [value]="text ?? ''" (input)="onInput($event)" (keyup.enter)="onSubmit($event)" />
		</div>
	`,
	styles: [
		`
			.ns-searchbar input {
				width: 100%;
				padding: 6px 8px;
			}
		`,
	],
})
export class SearchBarComponent {
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

