import { Component, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-cart-list-card',
  templateUrl: './cart-list-card.component.html',
  styleUrls: ['./cart-list-card.component.css']
})
export class CartListCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

     product : Product = {
    "id": 1,
    "name": "Wazzu",
    "price": 1071,
    "description": "Elit ad minim dolor fugiat est adipisicing anim veniam velit est dolore. Laboris et veniam et ullamco mollit esse fugiat Lorem anim excepteur nulla culpa et. In veniam Lorem ut aliqua labore incididunt mollit eiusmod ea non.",
    "image": "https://picsum.photos/seed/veniam/225/160",
    "category": ["chairs"]
  };
}

