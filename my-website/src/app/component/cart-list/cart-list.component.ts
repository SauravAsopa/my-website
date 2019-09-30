import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
cartList: any = [];
  constructor(private productService: ProductsService, private route: Router) { }

  ngOnInit() {
    this.cartList = this.productService.getProductFromCart();
    console.log(this.cartList);
  }

  onRemoveClick() {
    console.log("remove button clicked");
  }

  onSelectDeliveryAddress() {
    this.route.navigate(['/addresslist']);
  }

}
