import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
	selector: '[row],[col],[rowSpan],[colSpan]',
	standalone: true,
})
export class NsGridPositionDirective implements OnChanges {
	@Input() row?: number | string;
	@Input() col?: number | string;
	@Input() rowSpan?: number | string;
	@Input() colSpan?: number | string;

	constructor(
		private readonly el: ElementRef<HTMLElement>,
		private readonly renderer: Renderer2
	) {}

	ngOnChanges(): void {
		const host = this.el.nativeElement;
		const row = this.toNumberOrUndefined(this.row);
		const col = this.toNumberOrUndefined(this.col);
		const rowSpan = this.toNumberOrUndefined(this.rowSpan);
		const colSpan = this.toNumberOrUndefined(this.colSpan);

		if (row !== undefined) {
			const start = row + 1;
			const span = rowSpan && rowSpan > 0 ? rowSpan : 1;
			this.renderer.setStyle(host, 'grid-row', `${start} / span ${span}`);
		}
		if (col !== undefined) {
			const start = col + 1;
			const span = colSpan && colSpan > 0 ? colSpan : 1;
			this.renderer.setStyle(host, 'grid-column', `${start} / span ${span}`);
		}
	}

	private toNumberOrUndefined(v: number | string | undefined): number | undefined {
		if (v === undefined || v === null) return undefined;
		const n = typeof v === 'number' ? v : Number(v);
		return Number.isFinite(n) ? n : undefined;
	}
}

