import { Component, Input, OnInit} from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/interface';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: any = []
  @Input() error: any = []

  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  addItemToCart(product: any) {
    product.quantity = 1
    this.cartService.addToCart(product)
  }

  ngOnInit(): void {
    // console.log('card_component mounted')
  }


}
