import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { StInputType, StTone } from '../../common/design-system.types';

@Component({
  selector: 'st-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class StInputComponent {
  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly type = input<StInputType>('text');
  readonly helperText = input<string>('');
  readonly errorText = input<string>('');
  readonly disabled = input(false);
  readonly tone = input<StTone>('brand');

  protected readonly internalValue = signal('');
  readonly valueChange = output<string>();

  protected readonly hasError = computed(() => !!this.errorText());

  protected readonly hintText = computed(() => this.errorText() || this.helperText());

  protected readonly fieldClasses = computed(() => {
    const base = `st-input__field st-input__field--${this.tone()}`;
    return this.hasError() ? `${base} st-input__field--error` : base;
  });

  protected onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.internalValue.set(value);
    this.valueChange.emit(value);
  }
}
