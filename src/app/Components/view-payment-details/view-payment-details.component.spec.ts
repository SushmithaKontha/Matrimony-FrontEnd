import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentDetailsComponent } from './view-payment-details.component';

describe('ViewPaymentDetailsComponent', () => {
  let component: ViewPaymentDetailsComponent;
  let fixture: ComponentFixture<ViewPaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaymentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
