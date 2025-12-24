import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'ActivityIndicator, activityindicator',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-activity-indicator" [class.busy]="busy"></div>`,
	styles: [
		`
			.ns-activity-indicator {
				width: 20px;
				height: 20px;
				border-radius: 50%;
				border: 2px solid rgba(255, 255, 255, 0.3);
				border-top-color: currentColor;
				opacity: 0.8;
			}
			.ns-activity-indicator.busy {
				animation: ns-spin 0.8s linear infinite;
			}
			@keyframes ns-spin {
				to {
					transform: rotate(360deg);
				}
			}
		`,
	],
})
export class ActivityIndicatorComponent {
	@Input() busy = true;
}

