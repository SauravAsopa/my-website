import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  public currentCartCount = new BehaviorSubject(0);
  constructor() {}

  getProductFromCart() {
    return JSON.parse(localStorage.getItem("product"));
  }

  addProductToCart(products: any) {
    localStorage.setItem('product', JSON.stringify(products));
  }

  updateCartCount(count: number) {
    this.currentCartCount.next(count);
  }
}
