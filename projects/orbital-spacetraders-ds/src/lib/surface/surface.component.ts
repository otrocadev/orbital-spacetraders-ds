import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type StSurfaceTone = 'default' | 'brand' | 'accent';

@Component({
  selector: 'st-surface',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './surface.component.html',
  styleUrl: './surface.component.scss',
})
export class StSurfaceComponent {
  readonly eyebrow = input('');
  readonly title = input('');
  readonly description = input('');
  readonly tone = input<StSurfaceTone>('default');

  protected readonly classes = computed(() => `st-surface st-surface--${this.tone()}`);
}
