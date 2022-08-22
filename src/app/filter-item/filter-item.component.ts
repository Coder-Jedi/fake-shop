import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {

  @Input() filterName! : string;
  @Input() isActive! : boolean;
  @Output() filterSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() : void {
    this.filterSelect.emit(this.filterName);
  }

}
