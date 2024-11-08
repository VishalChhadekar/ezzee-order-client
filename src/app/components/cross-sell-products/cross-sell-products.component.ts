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
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.productService.getProducts().subscribe((data) => {
    //   this.products = data;
    // });
  }
}
