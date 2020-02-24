import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescueComponent } from './rescue.component';

describe('RescueComponent', () => {
  let component: RescueComponent;
  let fixture: ComponentFixture<RescueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
