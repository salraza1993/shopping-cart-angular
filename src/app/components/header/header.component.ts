import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total_cart_items: ProductInterface[] = [];

  constructor(private cartService: CartService) { }
  cartItems: any = this.cartService.cartItemList

  ngOnInit(): void {
    this.cartService.getTotalCartItems().subscribe(res => {
      this.total_cart_items = res;
    });
  }
}
