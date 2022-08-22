import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filters! : string[];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getFiltersObservable.subscribe(value => {
      this.filters = value;
    });
  }

  onFilterSelect(filterName : string) {
    switch (filterName) {
      case "All Categories":
        this.dataService.setFilters([]);
        break;
      case "Tables":
        this.dataService.setFilters(["tables"]);
        break;
      case "Chairs":
        this.dataService.setFilters(["chairs"]);
        break;    
      default:
        break;
    }
  }

}
