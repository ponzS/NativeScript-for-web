import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ActionItem, actionitem',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<button class="ns-actionitem" (click)="tap.emit($event)"><ng-content></ng-content></button>`,
	styles: [
		`
			.ns-actionitem {
				background: transparent;
				border: none;
				color: inherit;
				cursor: pointer;
				padding: 8px;
			}
		`,
	],
})
export class ActionItemComponent {
	@Output() tap = new EventEmitter<MouseEvent>();
}
