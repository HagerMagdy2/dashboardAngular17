import { Component } from '@angular/core';
import { HourlySalesChartComponent } from "../hourly-sales-chart/hourly-sales-chart.component";
import { StationCardComponent } from "../station-card/station-card.component";

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [HourlySalesChartComponent, StationCardComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

}
