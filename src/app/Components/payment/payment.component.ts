import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Services/payment';
import { PaymentService } from 'src/app/Services/payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments?: Payment[];
  
 /* constructor(){}
  ngOnInit(): void {
    this.payments = [{
      "paymentId":1,
      "candidateName":"swetha",
      "bankName":"sbi",
      "accountNo":34567,
      "ifscCode":"456yfg",
      "amount":45679
    }];
  }*/
  constructor(private paymentService: PaymentService,private router: Router
  ){


  }
   

  ngOnInit(): void{
    this.getPayments();
  }
  private getPayments(){
    this.paymentService.getPayment().subscribe((data: Payment[]) => {
      
      this.payments = data;
    });
  }
  viewPaymentDetails(id: number){
    this.router.navigate(['payment-details',id]);
  }

 updatePayment(id: number){
     this.router.navigate(['update-payment', id]);
  }


}
