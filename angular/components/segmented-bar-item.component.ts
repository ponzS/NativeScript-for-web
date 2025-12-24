import { ChangeDetectionStrategy, Component, HostBinding, Input, Optional } from '@angular/core';
import { SegmentedBarComponent } from './segmented-bar.component';

@Component({
	selector: 'SegmentedBarItem, segmentedbaritem',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-segmentedbar-item"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-segmentedbar-item {
				display: block;
			}
		`,
	],
})
export class SegmentedBarItemComponent {
	@Input({ required: true }) title!: string;

	constructor(@Optional() private readonly parent?: SegmentedBarComponent) {}

	@HostBinding('style.display')
	get display(): string {
		if (!this.parent) return 'block';
		return this.parent.isActive(this) ? 'block' : 'none';
	}
}
