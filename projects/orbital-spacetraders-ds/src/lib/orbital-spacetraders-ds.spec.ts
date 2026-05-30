import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitalSpacetradersDs } from './orbital-spacetraders-ds';

describe('OrbitalSpacetradersDs', () => {
  let component: OrbitalSpacetradersDs;
  let fixture: ComponentFixture<OrbitalSpacetradersDs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbitalSpacetradersDs],
    }).compileComponents();

    fixture = TestBed.createComponent(OrbitalSpacetradersDs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
