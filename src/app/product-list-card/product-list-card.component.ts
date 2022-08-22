import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.css']
})
export class ProductListCardComponent implements OnInit {

  @Input()
  product!: Product;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  //  product : Product = {
  //   "id": 1,
  //   "name": "Wazzu",
  //   "price": 1071,
  //   "description": "Elit ad minim dolor fugiat est adipisicing anim veniam velit est dolore. Laboris et veniam et ullamco mollit esse fugiat Lorem anim excepteur nulla culpa et. In veniam Lorem ut aliqua labore incididunt mollit eiusmod ea non.",
  //   "image": "https://picsum.photos/seed/veniam/225/160",
  //   "category": ["chairs"]
  // };

  addToCart(product: Product) {
    this.cartService.addItem(product);
    window.alert(`The product: ${product.name} has been added to cart`);
  }

}
