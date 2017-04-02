import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeInfoComponent } from './bike-info.component';

describe('BikeInfoComponent', () => {
  let component: BikeInfoComponent;
  let fixture: ComponentFixture<BikeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
