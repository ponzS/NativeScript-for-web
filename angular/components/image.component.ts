import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'Image, image',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<img class="ns-image" [src]="src" />`,
	styles: [
		`
			.ns-image {
				display: block;
				max-width: 100%;
				height: auto;
			}
		`,
	],
})
export class ImageComponent {
	@Input({ required: true }) src!: string;
	@Input() stretch?: string;
}

