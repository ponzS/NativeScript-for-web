import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'Frame, frame',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div class="ns-frame"><ng-content></ng-content></div>`,
})
export class FrameComponent {}
