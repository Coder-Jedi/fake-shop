import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuStatusObservable! : Observable<boolean>;

  constructor(protected menuService : MenuService) { }

  ngOnInit(): void {
    this.menuStatusObservable = this.menuService.menuStatusObservable;
  }

}
