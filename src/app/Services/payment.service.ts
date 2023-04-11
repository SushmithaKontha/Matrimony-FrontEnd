import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseURL = "http://localhost:9090/api/v1/payments";

  constructor(private httpClient: HttpClient) { }
  getPayment(): Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(`${this.baseURL}`)
  }
  addPayment(payment: Payment): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,payment);

  }
  getPaymentById(id: number): Observable<Payment>{
    return this.httpClient.get<Payment>(`${this.baseURL}/${id}`);
  }
  updatePayment(id: number, payment: Payment): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, payment);
  }
}