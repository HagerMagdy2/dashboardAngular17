import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { GraphButtonComponent } from "../graph-button/graph-button.component";
import { ChartsComponent } from "../charts/charts.component";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SalesComponent } from "../sales/sales.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, GraphButtonComponent, ChartsComponent, RouterOutlet, HeaderComponent, SalesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
