import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { CartServiceService } from '../../services/cart-service.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartServiceService,
    private sharedService: SharedService // Inject shared service
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const search = params['search'] || '';
      if (!search) {
        this.getProducts();
      } else {
        this.filteredProducts = this.products.filter(product =>
          product.product_name.toLowerCase().includes(search.toLowerCase())
        );
      }
    });
    this.sharedService.searchQuery$.subscribe(query => {
      this.filterProducts(query); // Filter products whenever the search query changes
    });
  }

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = products;
      },
      error: (error) => console.error('Error fetching products:', error)
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.product_name} has been added to the cart!`);
    console.log(this.cartService.getCartItems())
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
}
