import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../app/shared.module'
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CrossSellProductsComponent } from './components/cross-sell-products/cross-sell-products.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule,
    HeaderComponent,
    HeroSectionComponent,
    CrossSellProductsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ezzee-order-client';

  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      description: 'High-quality wireless headphones with noise cancellation.',
      imageUrl: 'assets/images/wireless-headphones.jpg'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      description: 'Smart watch with health tracking and notifications.',
      imageUrl: 'assets/images/smart-watch.jpg'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 49.99,
      description: 'Portable Bluetooth speaker with excellent sound quality.',
      imageUrl: 'assets/images/bluetooth-speaker.jpg'
    },
    {
      id: 4,
      name: 'Laptop Stand',
      price: 29.99,
      description: 'Adjustable laptop stand with ergonomic design.',
      imageUrl: 'assets/images/laptop-stand.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
