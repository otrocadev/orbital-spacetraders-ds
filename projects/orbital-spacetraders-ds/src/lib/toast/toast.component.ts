import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';

export type StToastTone = 'brand' | 'accent' | 'neutral';

@Component({
  selector: 'st-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class StToastComponent {
  readonly message = input<string>('');
  readonly tone = input<StToastTone>('brand');
  readonly duration = input<number>(4000);
  readonly open = signal(false);
  readonly dismissed = output<void>();

  protected readonly toastClasses = computed(() => `st-toast st-toast--${this.tone()}`);

  show(): void {
    this.open.set(true);
    if (this.duration() > 0) {
      setTimeout(() => this.dismiss(), this.duration());
    }
  }

  dismiss(): void {
    this.open.set(false);
    this.dismissed.emit();
  }
}
