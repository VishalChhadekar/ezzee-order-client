import { Component } from '@angular/core';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class CustomCarouselComponent {
  slides: string[] = [
    'https://img.freepik.com/free-psd/hiking-concept-landing-page-template_23-2148515737.jpg?t=st=1731076758~exp=1731080358~hmac=4ae096fa5cec1107c5f5130bd2a4486ff3dddfbb1e0391fc17f6406b6b371cf1&w=1060',
    'https://img.freepik.com/free-psd/hiking-concept-landing-page-template_23-2148515737.jpg?t=st=1731076758~exp=1731080358~hmac=4ae096fa5cec1107c5f5130bd2a4486ff3dddfbb1e0391fc17f6406b6b371cf1&w=1060',
    'https://img.freepik.com/free-psd/hiking-concept-landing-page-template_23-2148515737.jpg?t=st=1731076758~exp=1731080358~hmac=4ae096fa5cec1107c5f5130bd2a4486ff3dddfbb1e0391fc17f6406b6b371cf1&w=1060',
  ];
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
