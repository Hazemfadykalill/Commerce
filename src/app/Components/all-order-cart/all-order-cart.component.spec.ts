import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrderCartComponent } from './all-order-cart.component';

describe('AllOrderCartComponent', () => {
  let component: AllOrderCartComponent;
  let fixture: ComponentFixture<AllOrderCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllOrderCartComponent]
    });
    fixture = TestBed.createComponent(AllOrderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
