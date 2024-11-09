import { SharedModule } from '../../shared.module';
import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { CartServiceService } from '../../services/cart-service.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-cross-sell-products',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cross-sell-products.component.html',
  styleUrl: './cross-sell-products.component.scss'
})
export class CrossSellProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];  // To store filtered products based on search query

  constructor(
    private productService: ProductService,
    private cartService: CartServiceService,
    private sharedService: SharedService // Inject shared service
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.sharedService.searchQuery$.subscribe(query => {
      this.filterProducts(query); // Filter products whenever the search query changes
    });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;  // Initially, show all products
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  filterProducts(query: string): void {
    if (query) {
      this.filteredProducts = this.products.filter(product =>
        product.product_name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;  // If no query, show all products
    }
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.product_name} has been added to the cart!`);
  }
}
