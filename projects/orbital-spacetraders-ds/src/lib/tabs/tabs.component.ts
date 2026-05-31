import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
  ViewChildren,
  QueryList,
  AfterContentInit,
  ContentChildren,
} from '@angular/core';
import { StTabComponent } from './tab.component';

@Component({
  selector: 'st-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class StTabsComponent implements AfterContentInit {
  readonly selectedIndex = input<number>(0);
  readonly selectedChange = output<number>();

  @ContentChildren(StTabComponent) tabs!: QueryList<StTabComponent>;

  readonly activeIndex = signal(0);

  ngAfterContentInit(): void {
    this.activeIndex.set(this.selectedIndex());
    this.updateTabStates();
  }

  readonly selectTab = (index: number): void => {
    this.activeIndex.set(index);
    this.selectedChange.emit(index);
    this.updateTabStates();
  };

  private updateTabStates(): void {
    this.tabs.forEach((tab, i) => {
      tab.setActive(i === this.activeIndex());
    });
  }
}
