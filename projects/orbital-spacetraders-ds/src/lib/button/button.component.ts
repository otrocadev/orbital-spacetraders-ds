import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { StButtonVariant, StSize, StTone } from '../common/design-system.types';

@Component({
  selector: 'st-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class StButtonComponent {
  readonly tone = input<StTone>('brand');
  readonly variant = input<StButtonVariant>('primary');
  readonly size = input<StSize>('md');
  readonly disabled = input(false);
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly pressed = output<MouseEvent>();

  protected readonly classes = computed(
    () =>
      `st-button st-button--${this.variant()} st-button--${this.size()} st-button--${this.tone()}`,
  );

  protected handleClick(event: MouseEvent): void {
    this.pressed.emit(event);
  }
}
