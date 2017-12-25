import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTypesComponent } from './place-types.component';

describe('PlaceTypesComponent', () => {
  let component: PlaceTypesComponent;
  let fixture: ComponentFixture<PlaceTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
