import { Component } from '@angular/core';
import { GraphButtonComponent } from "../graph-button/graph-button.component";
import { TimeButtonComponent } from "../time-button/time-button.component";
import { DateTimePickerComponent } from "../date-time-picker/date-time-picker.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GraphButtonComponent, TimeButtonComponent, DateTimePickerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  monitoredStations = '2/3';  
  lastUpdate = '20s'; 
}
