import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/Services/payment';
import { PaymentService } from 'src/app/Services/payment.service';


@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit {
msg?:string;
  id?: any;
  payment: Payment = new Payment();
  constructor(private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.paymentService.getPaymentById(this.id).subscribe((data: any) =>{
      this.payment = data;
    },error => console.log(error));
  }
  onSubmit(){
    this.paymentService.updatePayment(this.id,this.payment).subscribe(data =>{
      this.goToPayment();
    },
    (error:any) => {
      this.msg = "Please enter valid details"
      alert("enter all fields");
      console.log("error" + error)

  });
}
  goToPayment(){
    this.router.navigate(['/payments']);
  }

}