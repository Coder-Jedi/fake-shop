import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products! : Product[];
  cartTotalObservable! : Observable<number>;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.cartTotalObservable =this.cartService.cartTotalObservable;
  }

}
