import { CommonModule } from '@angular/common';
import {
	AfterContentInit,
	ChangeDetectionStrategy,
	Component,
	ContentChildren,
	EventEmitter,
	Input,
	Output,
	QueryList,
} from '@angular/core';
import { SegmentedBarItemComponent } from './segmented-bar-item.component';

@Component({
	selector: 'SegmentedBar, segmentedbar',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	template: `
		<div class="ns-segmentedbar">
			<div class="ns-segmentedbar-header">
				<button
					*ngFor="let t of displayItems; let i = index"
					class="ns-segment"
					[class.active]="i === currentIndex"
					(click)="select(i)"
				>
					{{ t }}
				</button>
			</div>
			<div class="ns-segmentedbar-body"><ng-content></ng-content></div>
		</div>
	`,
	styles: [
		`
			.ns-segmentedbar {
				display: block;
				color: inherit;
			}
			.ns-segmentedbar-header {
				display: flex;
				gap: 8px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.3);
				padding-bottom: 8px;
			}
			.ns-segment {
				background: transparent;
				border: none;
				color: #fff;
				padding: 8px 12px;
				cursor: pointer;
				opacity: 0.95;
			}
			.ns-segment.active {
				opacity: 1;
				border-bottom: 2px solid currentColor;
			}
			.ns-segmentedbar-body {
				padding-top: 12px;
			}
		`,
	],
})
export class SegmentedBarComponent implements AfterContentInit {
	@Input() items?: string[];
	@Input() selectedIndex?: number;
	@Output() selectedIndexChange = new EventEmitter<number>();
	@Output() change = new EventEmitter<number>();

	@ContentChildren(SegmentedBarItemComponent) private readonly contentItems?: QueryList<SegmentedBarItemComponent>;

	currentIndex = 0;
	displayItems: string[] = [];

	ngAfterContentInit(): void {
		this.currentIndex = typeof this.selectedIndex === 'number' ? this.selectedIndex : 0;
		this.refreshItems();
		this.contentItems?.changes.subscribe(() => this.refreshItems());
	}

	select(i: number) {
		this.currentIndex = i;
		this.selectedIndexChange.emit(i);
		this.change.emit(i);
	}

	isActive(item: SegmentedBarItemComponent): boolean {
		const list = this.contentItems?.toArray() ?? [];
		const idx = list.indexOf(item);
		if (idx < 0) return true;
		return idx === this.currentIndex;
	}

	private refreshItems() {
		if (this.items && this.items.length) {
			this.displayItems = this.items;
			return;
		}
		this.displayItems = (this.contentItems?.toArray() ?? []).map((it: SegmentedBarItemComponent) => it.title);
	}
}
