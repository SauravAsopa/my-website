import { ProductsService } from "./../../services/products.service";
import { BackendService } from "./../../services/backend.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  userIsAuthenticated: boolean = false;
  cartCount: any;
  userName: string;
  constructor(
    private authService: AuthService,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.authListenerSubs = this.authService
      .getAuthListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userName = this.authService.getUserName();
      });
    this.productService.currentCartCount.subscribe(count => {
      this.cartCount = count;
    })
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
