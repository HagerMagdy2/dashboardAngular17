import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
export interface Station {
  ballColor: string;
  img: string;
  name: string;
  totalSales: number;
  totalValue: number;
  compressionState: string;
  totalTransactionCount: number;
  maxTransactionHour: number;
  maxTransactionDateTime: string;
}
@Component({
  selector: 'app-station-list',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './station-list.component.html',
  styleUrl: './station-list.component.css'
})
export class StationListComponent {
  stations: Station[] = [
    {
      ballColor: '#FF6F56',
      name: 'STATION NAME DUMMY',
      img:'assets/images/gas-station-sorange.png',
      totalSales: 62.721,
      totalValue: 550,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionHour: 20,
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    },
    {
      ballColor: '#FF6F56',
      name: 'STATION NAME DUMMY',
      img:'assets/images/gas-station-sorange.png',
      totalSales: 62.721,
      totalValue: 550,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionHour: 20,
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    },
    {
      ballColor: '#B9CDE2',
      name: 'STATION NAME DUMMY',
      img:'assets/images/gas-station-svgrepo-coom.png',
      totalSales: 62.721,
      totalValue: 550,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionHour: 20,
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    }
  ];
}
