import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StSize, StTone } from '../common/design-system.types';

@Component({
  selector: 'st-stat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.scss',
})
export class StStatComponent {
  readonly label = input<string>('');
  readonly value = input<string | number>('');
  readonly tone = input<StTone>('brand');
  readonly size = input<StSize>('md');
}
