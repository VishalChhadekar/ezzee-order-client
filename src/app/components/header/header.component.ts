import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

import { FormsModule } from '@angular/forms';
import { CartServiceService } from '../../services/cart-service.service';

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
  cartItems: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartServiceService
  ) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  onSearch(): void {
    // Implement search functionality
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
}
