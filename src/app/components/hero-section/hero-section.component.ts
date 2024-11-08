import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CustomCarouselComponent } from '../../custom-carousel/custom-carousel.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [SharedModule, CustomCarouselComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
