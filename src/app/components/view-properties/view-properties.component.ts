import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CheckableItem {
  label: string;
  isChecked: boolean;
}
@Component({
  selector: 'app-view-properties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-properties.component.html',
  styleUrl: './view-properties.component.css'
})

export class ViewPropertiesComponent {
  @Input() items: CheckableItem[] = [];
  @Output() selectionChange = new EventEmitter<CheckableItem[]>();

  toggleCheck(item: CheckableItem) {
    item.isChecked = !item.isChecked;
    this.selectionChange.emit([...this.items]);
  }
}