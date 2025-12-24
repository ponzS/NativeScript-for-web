import { CommonModule } from '@angular/common';
import {
	AfterContentInit,
	ChangeDetectionStrategy,
	Component,
	ContentChildren,
	Input,
	QueryList,
} from '@angular/core';
import { TabViewItemComponent } from './tab-view-item.component';

@Component({
	selector: 'TabView, tabview',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	template: `
		<div class="ns-tabview">
			<div class="ns-tabview-header">
				<button
					*ngFor="let title of items; let i = index"
					class="ns-tabview-tab"
					[class.active]="i === currentIndex"
					(click)="select(i)"
				>
					{{ title }}
				</button>
			</div>
			<div class="ns-tabview-body"><ng-content></ng-content></div>
		</div>
	`,
	styles: [
		`
			.ns-tabview {
				display: block;
			}
			.ns-tabview-header {
				display: flex;
				gap: 8px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.2);
				padding-bottom: 8px;
			}
			.ns-tabview-tab {
				background: transparent;
				border: none;
				color: inherit;
				padding: 8px 12px;
				cursor: pointer;
				opacity: 0.7;
			}
			.ns-tabview-tab.active {
				opacity: 1;
				border-bottom: 2px solid currentColor;
			}
			.ns-tabview-body {
				padding-top: 12px;
			}
		`,
	],
})
export class TabViewComponent implements AfterContentInit {
	@Input() selectedIndex?: number;

	@ContentChildren(TabViewItemComponent) private readonly contentItems?: QueryList<TabViewItemComponent>;

	items: string[] = [];
	currentIndex = 0;

	ngAfterContentInit(): void {
		this.currentIndex = typeof this.selectedIndex === 'number' ? this.selectedIndex : 0;
		this.refreshItems();
		this.contentItems?.changes.subscribe(() => this.refreshItems());
	}

	select(i: number) {
		this.currentIndex = i;
	}

	isActive(item: TabViewItemComponent): boolean {
		const list = this.contentItems?.toArray() ?? [];
		const idx = list.indexOf(item);
		if (idx < 0) return true;
		return idx === this.currentIndex;
	}

	private refreshItems() {
		this.items = (this.contentItems?.toArray() ?? []).map((it: TabViewItemComponent) => it.title);
	}
}
