import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { StTone } from '../common/design-system.types';

export interface StDropdownItem {
  label: string;
  description?: string;
  value: string;
}

@Component({
  selector: 'st-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class StDropdownComponent {
  readonly label = input('Select option');
  readonly items = input<StDropdownItem[]>([]);
  readonly tone = input<StTone>('accent');
  readonly selected = input<string | null>(null);
  readonly selectedChange = output<string>();

  protected readonly open = signal(false);

  protected readonly triggerLabel = computed(() => {
    const selectedValue = this.selected();
    const selectedItem = this.items().find((item) => item.value === selectedValue);

    return selectedItem?.label ?? this.label();
  });

  protected readonly triggerSummary = computed(() => {
    const selectedValue = this.selected();
    const selectedItem = this.items().find((item) => item.value === selectedValue);

    return selectedItem?.description ?? 'Choose a destination';
  });

  protected readonly classes = computed(() => `st-dropdown st-dropdown--${this.tone()}`);

  protected toggle(): void {
    this.open.update((isOpen) => !isOpen);
  }

  protected selectItem(value: string): void {
    this.selectedChange.emit(value);
    this.open.set(false);
  }
}
