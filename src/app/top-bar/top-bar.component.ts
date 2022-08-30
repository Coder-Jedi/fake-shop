import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { MenuService } from '../menu.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  emptyCartObservable! : Observable<boolean>;

  currentUserSubject : BehaviorSubject<string | null> = this.authService.currentUserSubject;

  showObject : {showCheckout:boolean,showBuy:boolean, showHamburger:boolean, showLogin:boolean, showUser:boolean, showSignUp:boolean} = {
    showCheckout : true,
    showBuy : false,
    showHamburger: true,
    showLogin: this.showLoginBool(),
    showUser: !this.showLoginBool(),
    showSignUp: false
  };
  showUserInfoDialog : boolean = false;

  constructor(private cartService: CartService,
              private menuService : MenuService,
              private router : Router,
              private authService: AuthService) {}

  ngOnInit(): void {
    this.emptyCartObservable = this.cartService.emptyCartObservable;

    this.router.events.subscribe(val=>{
      if(val instanceof NavigationEnd)
        {
          const str = val.url;

          switch (str) {
            case str.match(/^\/cart/)?.input:
              this.showObject = {
                showCheckout: false,
                showBuy: true,
                showHamburger: false,
                showLogin: false,
                showUser: !this.showLoginBool(),
                showSignUp: false
              }
              break;
            case str.match(/^\/buy/)?.input:
              this.showObject = {
                showCheckout: false,
                showBuy: false,
                showHamburger: false,
                showLogin: false,
                showUser: !this.showLoginBool(),
                showSignUp: false
              }
              break;
            case str.match(/^\/login/)?.input:              
              this.showObject = {
                showCheckout: false,
                showBuy: false,
                showHamburger: false,
                showLogin: false,
                showUser: false,
                showSignUp: true
              }
              break;
              case str.match(/^\/signup/)?.input:              
              this.showObject = {
                showCheckout: false,
                showBuy: false,
                showHamburger: false,
                showLogin: true,
                showUser: false,
                showSignUp: false
              }
              break;
              case str.match(/^\//)?.input:
              this.showObject = {
                showCheckout: true,
                showBuy: false,
                showHamburger: true,
                showLogin: this.showLoginBool(),
                showUser: !this.showLoginBool(),
                showSignUp: false
              }
              break;
            default:
              this.showObject = {
                showCheckout: true,
                showBuy: false,
                showHamburger: false,
                showLogin: this.showLoginBool(),
                showUser: !this.showLoginBool(),
                showSignUp: false
              }
              break;
          }
        }
    });
  }

  onMenuIconClick() {
    this.menuService.toggleMenuStatus();
  }

  showLoginBool() {
    return this.authService.currentUserSubject ? 
   (this.authService.currentUserSubject.getValue() ?  false : true)
   : true
  }
  
  toggleUserInfoDialog() {
    this.showUserInfoDialog = !this.showUserInfoDialog;
  }
  handleLogout() {
    this.authService.logout();
    this.showUserInfoDialog = false;
    this.showObject.showUser = false;
    this.showObject.showLogin = true;
    this.router.navigate(['/'])
    .then(()=>window.location.reload());
    // window.location.reload();
  }

}
