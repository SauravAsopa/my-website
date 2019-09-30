import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AuthData } from "../component/signup/auth-data.model";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  targetUrl: string = environment.apiUrl;
  token: any;
  userName: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  createUser(fullName: string, email: string, password: string) {
    const authData: AuthData = { fullName: fullName, email: email, password: password };
    return this.http.post(this.targetUrl + "/api/user/signup", authData);
  }

  getToken() {
    return this.token;
  }

  getAuthListener() {
    return this.authStatusListener.asObservable();
  }

  getUserName() {
    return this.userName;
  }

  loginUser(email: string, password: string) {
    const authData: any = { email: email, password: password };
    this.http
      .post(this.targetUrl + "/api/user/login", authData)
      .subscribe(res => {
        this.token = res["token"];
        this.userName = res['user'];
        console.log(this.userName);
        if (this.token) {
          this.authStatusListener.next(true);
          this.router.navigate(["/home"]);
        }
        else {
          this.authStatusListener.next(false);
        }
      });
  }

  logout() {
    this.token = null;
    this.authStatusListener.next(false);
    this.router.navigate(["/home"]);
  }
}
