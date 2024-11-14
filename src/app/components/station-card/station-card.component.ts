import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [],
  templateUrl: './station-card.component.html',
  styleUrl: './station-card.component.css'
})
export class StationCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() progress: number = 0;
}
