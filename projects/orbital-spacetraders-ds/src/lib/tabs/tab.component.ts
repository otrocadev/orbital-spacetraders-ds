import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'st-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class StTabComponent {
  readonly label = input<string>('');
  readonly icon = input<string>('');

  protected active = signal(false);

  setActive(isActive: boolean): void {
    this.active.set(isActive);
  }
}
