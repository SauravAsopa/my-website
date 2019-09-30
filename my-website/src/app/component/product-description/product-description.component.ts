import { ProductsService } from "./../../services/products.service";
import { ActivatedRoute } from "@angular/router";
import { BackendService } from "./../../services/backend.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-description",
  templateUrl: "./product-description.component.html",
  styleUrls: ["./product-description.component.css"]
})
export class ProductDescriptionComponent implements OnInit {
  productId: string;
  img_path: string;
  tshirt_name: string;
  product_code: string;
  price: number;
  actual_price: number;
  productDescription: any = [];
  // variables for add to cart feature
  productAddedToCart: any = [];
  cartItemCount: number;

  sizeVariant: any = ["S", "M", "L", "XL", "XXL"];
  constructor(
    private backendService: BackendService,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.params["productcode"];
    this.backendService.getProductDescription(this.productId).subscribe(res => {
      console.log(res);
      this.productDescription = res[0];
      this.img_path = res[0]["img_path"];
      this.tshirt_name = res[0]["tshirt_name"];
      this.product_code = res[0]["product_code"];
      this.price = res[0]["price"];
      this.actual_price = res[0]["actual_price"];
    });
  }

  onAddToCart() {
    this.productAddedToCart = this.productService.getProductFromCart();
    if (
      this.productAddedToCart == null ||
      this.productAddedToCart.length <= 0
    ) {
      this.productAddedToCart = [];
      this.productAddedToCart.push(this.productDescription);
      this.productService.addProductToCart(this.productAddedToCart);
      alert("product added successfully");
    } else {
      let tempProduct = this.productAddedToCart.find(
        p => p.product_code == this.productDescription.product_code
      );
      if (tempProduct == null) {
        this.productAddedToCart.push(this.productDescription);
        this.productService.addProductToCart(this.productAddedToCart);
        alert("product added successfully");
      }
      else {
        alert("product already added to cart");
      }
    }
    this.cartItemCount = this.productAddedToCart.length;
    this.productService.updateCartCount(this.cartItemCount);
  }
}
