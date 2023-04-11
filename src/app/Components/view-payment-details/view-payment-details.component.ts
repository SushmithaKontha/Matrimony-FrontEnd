import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/Services/payment';
import { PaymentService } from 'src/app/Services/payment.service';


@Component({
  selector: 'app-view-payment-details',
  templateUrl: './view-payment-details.component.html',
  styleUrls: ['./view-payment-details.component.css']
})
export class ViewPaymentDetailsComponent implements OnInit {

  id?: any
  payment?: Payment
  constructor(private route: ActivatedRoute, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.payment = new Payment();
    this.paymentService.getPaymentById(this.id).subscribe((data: any) =>{
      this.payment =data;
    })
  }


}
