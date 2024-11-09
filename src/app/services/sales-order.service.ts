import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface SalesOrder {
  id?: number;
  customerName: string;
  email: string;
  mobileNumber: string;
  status?: string;
  products: { productId: number; quantity: number }[];
}

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {
  private apiUrl = `${environment.apiUrl}/sales-orders`;

  constructor(private http: HttpClient) { }

  // Create a new sales order
  createSalesOrder(order: SalesOrder): Observable<SalesOrder> {
    return this.http.post<SalesOrder>(this.apiUrl, order);
  }

  // Fetch all sales orders (if needed)
  getSalesOrders(): Observable<SalesOrder[]> {
    return this.http.get<SalesOrder[]>(this.apiUrl);
  }

  // Fetch a specific sales order by ID (if needed)
  getSalesOrderById(id: number): Observable<SalesOrder> {
    return this.http.get<SalesOrder>(`${this.apiUrl}/${id}`);
  }
}
