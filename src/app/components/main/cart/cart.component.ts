import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/interface';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart_products: ProductInterface[] = []
  total_cart_items: any = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getTotalCartItems().subscribe((res:any) => {
      this.total_cart_items = res;
    });
    this.cartService.getProducts().subscribe(res => {
      this.cart_products = res;
    })
  }
}
