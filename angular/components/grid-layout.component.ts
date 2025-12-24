import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'GridLayout, gridlayout',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-grid" [ngStyle]="gridStyle"><ng-content></ng-content></div>`,
	styles: [
		`
			.ns-grid {
				padding: 0px;
				width: 100%;
				height: 100%;
				box-sizing: border-box;
				min-width: 0;
				min-height: 0;
			}
		`,
	],
})
export class GridLayoutComponent {
	@Input() rows?: string;
	@Input() columns?: string;

	get gridStyle(): Record<string, string> {
		const style: Record<string, string> = { display: 'grid' };
		const rows = this.parseSegments(this.rows);
		const cols = this.parseSegments(this.columns);
		if (rows) style.gridTemplateRows = rows;
		if (cols) style.gridTemplateColumns = cols;
		return style;
	}

	private parseSegments(input?: string): string | undefined {
		if (!input) return undefined;
		const segToCss = (s: string) => {
			const t = s.trim();
			if (!t) return 'auto';
			if (t === '*') return '1fr';
			const star = t.match(/^(\d+)\*$/);
			if (star) return `${star[1]}fr`;
			if (t.toLowerCase() === 'auto') return 'auto';
			if (/^\d+$/.test(t)) return `${t}px`;
			return t;
		};
		return input.split(',').map(segToCss).join(' ');
	}
}
