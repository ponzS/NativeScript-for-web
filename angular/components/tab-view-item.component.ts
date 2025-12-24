import { ChangeDetectionStrategy, Component, HostBinding, Input, Optional } from '@angular/core';
import { TabViewComponent } from './tab-view.component';

@Component({
	selector: 'TabViewItem, tabviewitem',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-tabview-item"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-tabview-item {
				display: block;
			}
		`,
	],
})
export class TabViewItemComponent {
	@Input({ required: true }) title!: string;

	constructor(@Optional() private readonly parent?: TabViewComponent) {}

	@HostBinding('style.display')
	get display(): string {
		if (!this.parent) return 'block';
		return this.parent.isActive(this) ? 'block' : 'none';
	}
}
