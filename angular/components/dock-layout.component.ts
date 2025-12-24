import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'DockLayout, docklayout',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="ns-dock">
			<div class="ns-dock-top"><ng-content select="[dock='top'],[dock='Top'],[dock='TOP']"></ng-content></div>
			<div class="ns-dock-middle">
				<div class="ns-dock-left"><ng-content select="[dock='left'],[dock='Left'],[dock='LEFT']"></ng-content></div>
				<div class="ns-dock-center"><ng-content></ng-content></div>
				<div class="ns-dock-right"><ng-content select="[dock='right'],[dock='Right'],[dock='RIGHT']"></ng-content></div>
			</div>
			<div class="ns-dock-bottom"><ng-content select="[dock='bottom'],[dock='Bottom'],[dock='BOTTOM']"></ng-content></div>
		</div>
	`,
	styles: [
		`
			.ns-dock {
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100%;
			}
			.ns-dock-top,
			.ns-dock-bottom {
				flex: 0 0 auto;
			}
			.ns-dock-middle {
				display: flex;
				flex: 1 1 auto;
				min-height: 0;
			}
			.ns-dock-left,
			.ns-dock-right {
				flex: 0 0 auto;
			}
			.ns-dock-center {
				flex: 1 1 auto;
				min-width: 0;
			}
		`,
	],
})
export class DockLayoutComponent {}
