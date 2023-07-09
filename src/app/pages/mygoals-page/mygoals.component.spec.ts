import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYGOALSComponent } from './mygoals.component';

describe('MYGOALSComponent', () => {
  let component: MYGOALSComponent;
  let fixture: ComponentFixture<MYGOALSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MYGOALSComponent]
    });
    fixture = TestBed.createComponent(MYGOALSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
