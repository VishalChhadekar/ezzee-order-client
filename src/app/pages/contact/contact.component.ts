import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onSubmit() {
    alert("Your message has been sent!");
  }
}
