import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items : Product[] = [];

  private cartUpdateEvent = new EventEmitter();

  emptyCartObservable = new Observable<boolean>(subscriber => {
    //sending the first value w/o event trigger after subscribing
    subscriber.next(this.isCartEmpty());

    //rest values will be sent after event trigger
    const handler = (e : any) => subscriber.next(e);
    this.cartUpdateEvent.subscribe(handler);
  });

  constructor() { }

  getItems() : Product[] {
    return this.items;
  }
  addItem(product:Product) : Product {
    this.items.push(product);
    this.cartUpdateEvent.emit(this.isCartEmpty());
    return product;
  }
  emptyCart() : Product[] {
    this.items = [];
    this.cartUpdateEvent.emit(this.isCartEmpty());
    return this.items;
  }
  isCartEmpty() : boolean {
    return this.items.length==0 ? true : false;
  }

}
