import { Component, OnInit } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { color } from 'highcharts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export class ChartsComponent {

  
  Chart = new Chart({
    chart: { type: 'column' },
    title: {
      text: 'STATIONS ACTIVATES OVERVIEW',
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'gray',
      },
    },
    subtitle: {
      text: '<span style="color: #FF7F5C; font-weight: bold; gap:5px; margin-right:8px;">SALES</span><span style="color: #3D5161; font-weight: bold; margin-right:8px;">TRANSACTION</span> <span style="color: #3D5161; font-weight: bold; margin-right:8px;">VALUE</span><span style="color: #3D5161; font-weight: bold; margin-right:8px;"> COMPRESSION</span> ',
      align: 'right',
      style: {
        fontSize: '12px',
        color: '#3D5161',
      },
      useHTML: true,
    },
    xAxis: {
      
      categories: [
        'Station Name Dummy 1',
        'Station Name Dummy 1',
        'Station Name Dummy 1',
        'Station Name Dummy 1',
        'Station Name Dummy  1',
      ],
      labels: {
        style: {
            color: '#3D5161'
        }
      }
    },
    yAxis: {
      title: {
        text: '',
      },

      labels: { enabled: true,style:{color:'#707070'} },
    },
    series: [
      {
        name:'',
        data: [250, 140, 200, 240, 130],
        color: '#FF7F5C',
        pointWidth: 10,
      } as any,
    ],
  });
  
}
