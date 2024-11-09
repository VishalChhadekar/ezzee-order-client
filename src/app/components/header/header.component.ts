import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

import { FormsModule } from '@angular/forms';
import { CartServiceService } from '../../services/cart-service.service';
import { SalesOrderService, SalesOrder } from '../../services/sales-order.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isCartModalOpen: boolean = false;
  cartItems: any[] = []; //
  successMessage: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartServiceService,
    private salesOrderService: SalesOrderService,
    private sharedService: SharedService, // Inject shared service
  ) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  // Trigger the checkout process and create a sales order
  checkout(): void {
    // Prepare the order data
    const order: SalesOrder = {
      customer_name: 'John Doe', // You can dynamically set this
      email: 'johndoe@example.com', // Similarly, dynamically set the email
      mobile_number: '1234567890', // Dynamically set mobile number
      status: 'Pending',
      product_ids: this.cartItems.map(item => item.product_id)  // Get product IDs from cart items
    };

    // Call the createSalesOrder method from SalesOrderService
    this.salesOrderService.createSalesOrder(order).subscribe({
      next: (response) => {
        // If order is successful, show success message
        this.successMessage = 'Your order has been successfully placed!';
        this.cartService.clearCart();  // Clear the cart after placing the order

        this.toggleCartModal()// close model
      },
      error: (error) => {
        console.error('Error placing order:', error);
        this.successMessage = 'An error occurred while placing your order. Please try again.';
      }
    });
  }

  toggleCartModal(): void {
    this.isCartModalOpen = !this.isCartModalOpen;
    if (this.isCartModalOpen) {
      this.getCartItems();
    }
  }

  getCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }
  // Remove from cart function
  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  }
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
  onSearch(): void {
    this.sharedService.updateSearchQuery(this.searchQuery); // Emit the search query
  }
}
