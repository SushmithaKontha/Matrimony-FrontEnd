import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Services/payment';
import { PaymentService } from 'src/app/Services/payment.service';


@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  payment: Payment= new Payment();

  constructor(private paymentService: PaymentService,
    private router: Router) { }
    msg: string=""

  ngOnInit(){
  }
  
  savePayment(){
    this.paymentService.addPayment(this.payment).subscribe( (data: any) => {
      console.log(data);
      this.goToPayment();
    },
    (error: any) => {
      this.msg = "Please enter valid details"
      alert("incorrect data entered");
      console.log("error" + error)
    });
  }
  goToPayment(){
    this.router.navigate(['/payments']);

  }
  onSubmit(){
   console.log(this.payment);

   this.savePayment();

  }
}
