import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChartsComponent } from "./components/charts/charts.component";
import { CardComponent } from "./components/card/card.component";
import { TimeButtonComponent } from "./components/time-button/time-button.component";
import { GraphButtonComponent } from "./components/graph-button/graph-button.component";
import { StationListComponent } from "./components/station-list/station-list.component";
import { HourlySalesChartComponent } from "./components/hourly-sales-chart/hourly-sales-chart.component";
import { StationCardComponent } from "./components/station-card/station-card.component";
import { HomeComponent } from "./components/home/home.component";
import { SalesComponent } from "./components/sales/sales.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, ChartsComponent, CardComponent, TimeButtonComponent, GraphButtonComponent, StationListComponent, HourlySalesChartComponent, StationCardComponent, HomeComponent, SalesComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
//   document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('.button');

//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             buttons.forEach(btn => btn.classList.remove('selected'));
//             button.classList.add('selected');
//         });
//     });
// });

}
