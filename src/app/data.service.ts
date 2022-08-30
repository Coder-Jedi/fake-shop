import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private rawProducts! : Product[];
  private filters : string[] = [];
  
  private filterUpdateEvent = new EventEmitter();

  getProductsObservable = new Observable<Product[]>(subscriber => {
    this.getProductsFromApi().subscribe();
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

  constructor(private httpClient : HttpClient) {
  }

  getProducts() : Product[] {
    if(this.rawProducts) {
      return this.rawProducts
      .filter(product => {
        for(let f of this.filters)
        {
          if(!(product.category == f))
            return false;
        }
        return true;
      });
    }
    else
      return [];
  }
  getFilters() : string[] {
    return this.filters;
  }
  setFilters(filters : string[]) : string[] {
    this.filters = filters;
    this.filterUpdateEvent.emit();
    return this.filters;
  }

  getProductsFromApi() {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/products`).pipe(
      tap((res)=>{
        this.rawProducts = res;
        this.filterUpdateEvent.emit();
      })
    );
  }


}
