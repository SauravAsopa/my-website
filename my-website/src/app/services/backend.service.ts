import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  targetUrl:string = environment.apiUrl;
  constructor(private http: HttpClient) { }

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


}
