import { SharedModule } from '../../shared.module';
import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cross-sell-products',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cross-sell-products.component.html',
  styleUrl: './cross-sell-products.component.scss'
})
export class CrossSellProductsComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductService, 
    private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.product_name} has been added to the cart!`);
    console.log(this.cartService.getCartItems())
  };
}
