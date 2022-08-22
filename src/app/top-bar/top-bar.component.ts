import { Component, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  emptyCartObservable! : Observable<boolean>;

  constructor(private cartService: CartService,
              private ngZone : NgZone) {}

  ngOnInit(): void {
    this.emptyCartObservable = this.cartService.emptyCartObservable;
  }

  // setDisableCheckout(value : unknown ) : void {
  //   this.disableCheckout = true;
  //   console.log("value of this.disableCheckout before call: " + this.disableCheckout);
  //   console.log("setDisabledCheckout called with: " + value);
  //   if(typeof value == 'boolean' && this.ngZone)
  //   {
  //     this.ngZone.run(() => {
  //       this.disableCheckout = value;
  //     });
  //   }
  //   console.log("value of this.disableCheckout after call: " + this.disableCheckout);
  // }

}
