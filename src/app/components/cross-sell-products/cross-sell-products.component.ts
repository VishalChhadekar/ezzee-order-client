import { SharedModule } from '../../shared.module';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cross-sell-products',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cross-sell-products.component.html',
  styleUrl: './cross-sell-products.component.scss'
})
export class CrossSellProductsComponent {
  products = [
    {
      name: 'Product 1',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 2',
      price: 49.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 4',
      price: 89.99,
      image: 'https://via.placeholder.com/150',
    }
  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.productService.getProducts().subscribe((data) => {
    //   this.products = data;
    // });
  }
}
