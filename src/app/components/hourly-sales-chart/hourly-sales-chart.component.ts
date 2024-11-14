import { Component,OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-hourly-sales-chart',
  standalone: true,
  imports: [], 
  templateUrl: './hourly-sales-chart.component.html',
  styleUrl: './hourly-sales-chart.component.css'
})

export class HourlySalesChartComponent implements OnInit {
  @ViewChild('radarCanvas', { static: true }) radarCanvas!: ElementRef;

  radarChart: any;

  ngOnInit(): void {
    this.createRadarChart();
  }

  createRadarChart() {
    const ctx = this.radarCanvas.nativeElement.getContext('2d');
    this.radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['24:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        
        
        datasets: [
          {
            label: 'Dataset 1',
            animation: false,
            data: [65, 59, 90, 81, 56, 55, 40, 62, 78, 88, 72, 94],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            // pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            // pointBorderColor: '##00CBC0',
            //  pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
            pointStyle:'crossRot'
          },
          {
            label: 'Dataset 2',
            animation:false,

            data: [48, 68, 40, 59, 96, 47, 100, 53, 45, 67, 83, 56],
            fill: true,
            backgroundColor: '#009ACF33',
            borderColor: '#009ACF',
            // pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            // pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
            pointStyle:'crossRot'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 50,
            angleLines: {
              display: true
            }
          }
        }
      }
    });
  }
}
