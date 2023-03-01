import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cart: any = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {}
  removeCartItem(product: ProductInterface) {
    this.cartService.removeFromCart(product)
  }
  increaseQuantity(product: ProductInterface) {
    this.cartService.quantityIncrement(product)
  }
  decreaseQuantity(product: ProductInterface) {
    this.cartService.quantityDecrement(product)
  }
}
