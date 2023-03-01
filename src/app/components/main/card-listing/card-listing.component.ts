import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.component.html',
  styleUrls: ['./card-listing.component.scss']
})
export class CardListingComponent implements OnInit, OnDestroy {

  public subscription: Subscription[] = [];
  constructor(private apiService: ApiService) { }

  public cards: ProductInterface[] = []
  public error: boolean = false


  ngOnInit(): void {
    this.subscription.push(
      this.apiService.getProduct().subscribe({
        next: res => {
          this.error = false
          this.apiService.data = res.products.map(product => ({
            ...product,
            quantity: 0,
            totalPrice: product.price,
          }));
          this.cards = this.apiService.data;
        }, error: (err) => {
          this.error = true
          console.error('Error', err)
        }
      })
    )
  }

  ngOnDestroy(): void { }
}
