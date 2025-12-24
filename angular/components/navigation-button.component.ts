import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'NavigationButton, navigationbutton',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	template: `
		<button class="ns-navbutton" (click)="onClick($event)">
			<ng-content></ng-content>
			<ng-container *ngIf="text">{{ text }}</ng-container>
		</button>
	`,
	styles: [
		`
			.ns-navbutton {
				background: transparent;
				border: none;
				color: inherit;
				cursor: pointer;
				padding: 8px;
			}
		`,
	],
})
export class NavigationButtonComponent {
	@Input() text?: string;
	@Output() tap = new EventEmitter<MouseEvent>();

	onClick(e: MouseEvent) {
		this.tap.emit(e);
		if ((this.tap as any).observers?.length) return;
		if (window?.history?.back) window.history.back();
	}
}
