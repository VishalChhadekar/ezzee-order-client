import { Injectable } from '@angular/core';
import { Product } from './product.service';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartItems: Product[] = [];

  addToCart(product: Product): void {
    this.cartItems.push(product);
    console.log(`${product.product_name} has been added to the cart.`);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
