import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
export interface Station {
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
  imports: [CommonModule],
  templateUrl: './station-list.component.html',
  styleUrl: './station-list.component.css'
})
export class StationListComponent {
  stations: Station[] = [
    {
      name: 'STATION NAME DUMMY',
      img:'assets/images/gas-station-sorange.png',
      totalSales: 62721,
      totalValue: 550,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionHour: 20,
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    },
    {
      name: 'STATION NAME DUMMY',
      img:'assets/images/gas-station-sorange.png',
      totalSales: 62721,
      totalValue: 550,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionHour: 20,
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    },
    {
      name: 'STATION NAME DUMMY',
      img:'assets/images/gas-station-svgrepo-com.png',
      totalSales: 62721,
      totalValue: 550,
      compressionState: 'Compression',
      totalTransactionCount: 5161,
      maxTransactionHour: 20,
      maxTransactionDateTime: '8-1-2021 | 10:16 PM'
    }
  ];
}
