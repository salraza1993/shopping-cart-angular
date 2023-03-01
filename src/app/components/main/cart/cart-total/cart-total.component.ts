import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit, OnChanges {
  grand_total: number = 0;
  total_items: number = 0;
  total_cart_items: ProductInterface[] = [];

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.grandTotalAmount().subscribe(res => this.grand_total = res);
    this.cartService.getTotalCartItems().subscribe(res => this.total_cart_items = res);
    this.cartService.totalTotalSelectedItems().subscribe(res => this.total_items = res);
    // total_cart_items.map(item => {
    //   this.total_item += item.quantity
    //   console.log('items: ', item.quantity)
    // });
  }

  ngOnChanges(): void {
    console.log('changes', this.total_cart_items)
  }
}
