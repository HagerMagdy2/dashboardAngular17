import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activateToggle: string = '';
  toggleSidebar() {
    if (this.activateToggle) {
      this.activateToggle = ''
    } else {
      this.activateToggle = 'toggled'
    }
  }
}
