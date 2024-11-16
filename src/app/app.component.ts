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
import { FormsModule } from '@angular/forms';
import { ViewPropertiesComponent } from "./components/view-properties/view-properties.component";
interface CheckableItem {
  label: string;
  isChecked: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, ChartsComponent, CardComponent, TimeButtonComponent, GraphButtonComponent, StationListComponent, HourlySalesChartComponent, StationCardComponent, HomeComponent, SalesComponent, HeaderComponent, FormsModule, ViewPropertiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  
    checkableItems: CheckableItem[] = [
      { label: 'Total sales', isChecked: true },
      { label: 'Total transaction', isChecked: true },
      { label: 'Total value', isChecked: true },
      { label: 'Max transaction count per hour', isChecked: false },
      { label: 'Max transaction count date-time', isChecked: false },
      { label: 'Compressor status', isChecked: false },
    ];
  
    selectedItems: CheckableItem[] = [];
  
    onSelectionChange(items: CheckableItem[]) {
      this.selectedItems = items.filter(item => item.isChecked);
      // Do something with the selected items, e.g., send them to the server
    }
  }
