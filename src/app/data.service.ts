import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private rawProducts! : Product[];
  private filters : string[] = [];
  
  private filterUpdateEvent = new EventEmitter();

  getProductsObservable = new Observable<Product[]>(subscriber => {
    //first value will be sent w/o event trigger
    subscriber.next(this.getProducts());

    //later values will be sent after the event is triggered
    const handler = () => {subscriber.next(this.getProducts())};
    this.filterUpdateEvent.subscribe(handler);
  });

  getFiltersObservable = new Observable<string[]>(subscriber => {
    //first value will be sent w/o event trigger
    subscriber.next(this.getFilters());

    //later values will be sent after the event is triggered
    const handler = () => {subscriber.next(this.getFilters())};
    this.filterUpdateEvent.subscribe(handler);
  });

  constructor() {
    this.rawProducts = products;
  }

  getProducts() : Product[] {
    return products.filter(product => {
      for(let f of this.filters)
      {
        if(!product.category.includes(f))
          return false;
      }
      return true;
    });
  }
  getFilters() : string[] {
    return this.filters;
  }
  setFilters(filters : string[]) : string[] {
    this.filters = filters;
    this.filterUpdateEvent.emit();
    return this.filters;
  }


}
