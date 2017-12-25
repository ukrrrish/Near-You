import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlacesComponent } from './display-places.component';

describe('DisplayPlacesComponent', () => {
  let component: DisplayPlacesComponent;
  let fixture: ComponentFixture<DisplayPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
