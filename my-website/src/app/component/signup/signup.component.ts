import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupMessage: string;
  isSignup: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form:NgForm) {
    if(form.invalid) {
      return;
    }
    console.log(form.value);
    this.authService.createUser(form.value.fullName, form.value.email, form.value.password).subscribe(
      res => {
        this.signupMessage = res['message'];
        this.isSignup = true;
      }
    )
  }

}
