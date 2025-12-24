import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'ImageCacheIt, imagecacheit',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<img class="ns-imagecacheit" [src]="src" />`,
	styles: [
		`
			.ns-imagecacheit {
				display: block;
				max-width: 100%;
				height: auto;
			}
		`,
	],
})
export class ImageCacheItComponent {
	@Input({ required: true }) src!: string;
}

