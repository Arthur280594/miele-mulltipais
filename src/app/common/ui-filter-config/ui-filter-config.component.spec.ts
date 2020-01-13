import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFilterConfigComponent } from './ui-filter-config.component';

describe('UiFilterConfigComponent', () => {
  let component: UiFilterConfigComponent;
  let fixture: ComponentFixture<UiFilterConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiFilterConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiFilterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
