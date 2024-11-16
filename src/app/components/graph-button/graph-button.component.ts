import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-graph-button',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './graph-button.component.html',
  styleUrl: './graph-button.component.css'
})
export class GraphButtonComponent {
  selected: string = 'graph';

  select(time: string) {
    this.selected = time;
  }
}
