import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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

  showObject : {showCheckout:boolean,showBuy:boolean, showHamburger:boolean} = {
    showCheckout : true,
    showBuy : false,
    showHamburger: true
  };

  constructor(private cartService: CartService,
              private menuService : MenuService,
              private router : Router) {}

  ngOnInit(): void {
    this.emptyCartObservable = this.cartService.emptyCartObservable;

    this.router.events.subscribe(val=>{
      if(val instanceof NavigationEnd)
        {
          switch (val.url) {
            case '/cart':
              this.showObject = {
                showCheckout: false,
                showBuy: true,
                showHamburger: false
              }
              break;
            case '/buy':
              this.showObject = {
                showCheckout: false,
                showBuy: false,
                showHamburger: false
              }
              break;
              case '/':
              this.showObject = {
                showCheckout: true,
                showBuy: false,
                showHamburger: true
              }
              break;
            default:
              this.showObject = {
                showCheckout: true,
                showBuy: false,
                showHamburger: false
              }
              break;
          }
        }
    });
  }

  onMenuIconClick() {
    this.menuService.toggleMenuStatus();
  }

}
