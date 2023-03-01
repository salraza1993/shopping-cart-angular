import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CardListingComponent } from './components/main/card-listing/card-listing.component';
import { CardComponent } from './components/main/card-listing/card/card.component';
import { CartComponent } from './components/main/cart/cart.component';
import { CartItemComponent } from './components/main/cart/cart-item/cart-item.component';
import { CartTotalComponent } from './components/main/cart/cart-total/cart-total.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardListingComponent,
    CardComponent,
    CartComponent,
    CartItemComponent,
    CartTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
