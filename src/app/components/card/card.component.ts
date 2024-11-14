import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  totalValue: number = 71028;
  totalValueChange: number = 2;

  totalSales: number = 20000;
  totalSalesChange: number = 50;

  avgSales: number = 20000;
  avgSalesChange: number = 50;

  totalTransactions: number = 1567;
  transactionsChange: number = 20;
}
