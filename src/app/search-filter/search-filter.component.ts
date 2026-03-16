import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent {
  @Input() placeholderText: string = "Rechercher...";
  @Output() searchEvent = new EventEmitter<string>();

  onTyping(event: any) {
    this.searchEvent.emit(event.target.value);
  }
}
