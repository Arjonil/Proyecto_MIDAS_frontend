import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STRATEGYSComponent } from './strategys.component';

describe('STRATEGYSComponent', () => {
  let component: STRATEGYSComponent;
  let fixture: ComponentFixture<STRATEGYSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [STRATEGYSComponent]
    });
    fixture = TestBed.createComponent(STRATEGYSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
