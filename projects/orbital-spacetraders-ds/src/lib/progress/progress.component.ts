import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type StProgressTone = 'brand' | 'accent' | 'neutral';

@Component({
  selector: 'st-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class StProgressComponent {
  readonly value = input<number>(0);
  readonly max = input<number>(100);
  readonly label = input<string>('');
  readonly tone = input<StProgressTone>('brand');
  readonly showPercent = input(true);

  protected readonly percent = computed(() => {
    const val = this.value();
    const maximum = this.max();
    return maximum > 0 ? Math.round((val / maximum) * 100) : 0;
  });

  protected readonly barClasses = computed(
    () => `st-progress__bar st-progress__bar--${this.tone()}`,
  );
}
