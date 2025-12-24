import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
	selector: '[left],[top]',
	standalone: true,
})
export class NsAbsolutePositionDirective implements OnChanges {
	@Input() left?: number | string;
	@Input() top?: number | string;

	constructor(
		private readonly el: ElementRef<HTMLElement>,
		private readonly renderer: Renderer2
	) {}

	ngOnChanges(): void {
		const host = this.el.nativeElement;
		this.renderer.setStyle(host, 'position', 'absolute');
		if (this.left !== undefined) this.renderer.setStyle(host, 'left', this.toCssPx(this.left));
		if (this.top !== undefined) this.renderer.setStyle(host, 'top', this.toCssPx(this.top));
	}

	private toCssPx(v: number | string): string {
		if (typeof v === 'number') return `${v}px`;
		const t = v.trim();
		if (!t) return '0px';
		if (/^-?\d+(\.\d+)?$/.test(t)) return `${t}px`;
		return t;
	}
}

