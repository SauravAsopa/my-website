import { AuthData } from './../component/signup/auth-data.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  targetUrl:string = environment.apiUrl;
  token: any;

  constructor(private http: HttpClient, private router: Router) { }

  getheaderDetails() {
    return this.http.get(this.targetUrl + '/api/home/carousel_content')
  }

  getBlogDetails(): Observable<any> {
    return this.http.get(this.targetUrl + "/api/blog/blog_details");
  }

  getTeamDetails(): Observable<any> {
    return this.http.get(this.targetUrl + "/api/home/team_details");
  }

  getCategoryDetails(): Observable<any> {
    return this.http.get(this.targetUrl + "/api/home/categories");
  }

  getBlogInfo(id: string) {
    return this.http.get(this.targetUrl + "/api/blog/blog_info/" + id)
  }

  getProductList(category: string) {
    return this.http.get(this.targetUrl + "/api/products/productList/" + category);
  }

  sendEmail(email: any) {
    return this.http.post(this.targetUrl + "/api/sendEmail", email)
  }

  getProductDescription(productcode: string) {
    return this.http.get(this.targetUrl + "/api/product/get_product_description/" + productcode)
  }


}
