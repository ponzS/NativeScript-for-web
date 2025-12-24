import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'WebView, webview',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	template: `
		<iframe class="ns-webview" *ngIf="src; else projected" [src]="src"></iframe>
		<ng-template #projected><div class="ns-webview"><ng-content></ng-content></div></ng-template>
	`,
	styles: [
		`
			.ns-webview {
				width: 100%;
				height: 100%;
				border: none;
			}
		`,
	],
})
export class WebViewComponent {
	@Input() src?: string;
}
