import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  emptyCartObservable! : Observable<boolean>;

  constructor(private cartService: CartService,
              private menuService : MenuService) {}

  ngOnInit(): void {
    this.emptyCartObservable = this.cartService.emptyCartObservable;
  }

  onMenuIconClick() {
    this.menuService.toggleMenuStatus();
  }

}
