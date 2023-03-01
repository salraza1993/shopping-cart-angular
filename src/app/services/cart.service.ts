import { Injectable } from '@angular/core';
import { ProductInterface, ProductResponse } from '../interfaces/interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: ProductInterface[] = [];
  public productList = new BehaviorSubject<ProductInterface[]>([]);
  public totalCartItems = new BehaviorSubject<ProductInterface[]>([]);
  public grandTotal = new BehaviorSubject<number>(0);
  public total_selected_items = new BehaviorSubject<number>(0);

  constructor() { }

  getProducts() { return this.productList.asObservable() }

  getTotalCartItems() { return this.totalCartItems.asObservable() }

  grandTotalAmount() { return this.grandTotal.asObservable() }
  totalTotalSelectedItems() { return this.total_selected_items.asObservable() }


  setProduct(product: ProductInterface[]) {
    this.cartItemList.push(...product);
    this.productList.next(product);
    this.totalCartItems.next(this.cartItemList)
  }

  addToCart(product: ProductInterface) {
    const already_exist = this.cartItemList.find(item => item.id === product.id);
    if (!already_exist) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }
    this.totalCartItems.next(this.cartItemList)
    this.getTotalSelectedItems();
  }
  getTotalPrice(): number {
    let grandTotal: number = 0;
    this.cartItemList.map((item: any) => {
      grandTotal += item.totalPrice
    })
    this.grandTotal.next(grandTotal)
    return grandTotal;
  }

  getTotalSelectedItems() {
    let grandItems: number = 0;
    this.cartItemList.map((item: any) => {
      grandItems += item.quantity
    })
    this.total_selected_items.next(grandItems);
    return grandItems;
  }

  quantityIncrement(product: ProductInterface) {
    let product_price = product.price;
    product.quantity += 1
    product.totalPrice = (product_price * product.quantity);
    this.getTotalPrice();
    this.getTotalSelectedItems();
    this.totalCartItems.next(this.cartItemList)
  }
  quantityDecrement(product: ProductInterface) {
    let product_price = product.price;
    if (product.quantity > 1) {
      product.quantity -= 1
      product.totalPrice = (product_price * product.quantity);
      this.getTotalPrice()
      this.getTotalSelectedItems();
      this.totalCartItems.next(this.cartItemList)
    }
  }

  removeFromCart(product: ProductInterface) {
    this.cartItemList.map((item: ProductInterface, index:number) => {
      if (product.id === item.id) {
        this.cartItemList.splice(index, 1)
      }
    })
    this.totalCartItems.next(this.cartItemList)
    this.getTotalPrice()
  }
  removeAllFromCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList)
    this.totalCartItems.next(this.cartItemList)
    this.getTotalPrice()
  }
}
