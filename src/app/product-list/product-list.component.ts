import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsObservable! : Observable<Product[]>;

  constructor(private dataService : DataService) {}

  ngOnInit(): void {
    this.productsObservable = this.dataService.getProductsObservable;
  }

}
