import { Component } from '@angular/core';

@Component({
  selector: 'app-time-button',
  standalone: true,
  imports: [],
  templateUrl: './time-button.component.html',
  styleUrl: './time-button.component.css'
})
export class TimeButtonComponent {
  selectedTime: string = 'today';

  selectTime(time: string) {
    this.selectedTime = time;
  }
}
