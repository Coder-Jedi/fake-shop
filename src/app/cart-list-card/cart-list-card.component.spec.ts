import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListCardComponent } from './cart-list-card.component';

describe('CartListCardComponent', () => {
  let component: CartListCardComponent;
  let fixture: ComponentFixture<CartListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
