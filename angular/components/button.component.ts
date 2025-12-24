import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'Button, button[nsButton], ns-button',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<button class="ns-button" [ngStyle]="btnStyle" (click)="tap.emit($event)"><ng-content></ng-content></button>`,
	styles: [
		`
			.ns-button {
				cursor: pointer;
			}
		`,
	],
})
export class ButtonComponent {
	@Input() horizontalAlignment?: string;
	@Output() tap = new EventEmitter<MouseEvent>();

	get btnStyle(): Record<string, string> {
		const style: Record<string, string> = {};
		const h = this.horizontalAlignment?.toLowerCase();
		if (h === 'center') {
			style.display = 'block';
			style.width = 'fit-content';
			style.marginLeft = 'auto';
			style.marginRight = 'auto';
			style.alignSelf = 'center';
			style.justifySelf = 'center';
		} else if (h === 'right') {
			style.display = 'block';
			style.width = 'fit-content';
			style.marginLeft = 'auto';
			style.alignSelf = 'flex-end';
			style.justifySelf = 'end';
		} else if (h === 'left') {
			style.display = 'block';
			style.width = 'fit-content';
			style.marginRight = 'auto';
			style.alignSelf = 'flex-start';
			style.justifySelf = 'start';
		}
		return style;
	}
}
