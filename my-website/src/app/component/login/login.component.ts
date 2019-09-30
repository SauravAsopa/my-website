import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean = true;
  authListenerSubs: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.loginUser(form.value.email, form.value.password);
    this.authListenerSubs = this.authService
      .getAuthListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
    // if (token == undefined) {
    //   this.isNotAuthenticated = true;
    // } else {
    //   this.isNotAuthenticated = false;
    // }
  }
}
