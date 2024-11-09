import { SharedModule } from '../../shared.module';
import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-cross-sell-products',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cross-sell-products.component.html',
  styleUrl: './cross-sell-products.component.scss'
})
export class CrossSellProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

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
}
