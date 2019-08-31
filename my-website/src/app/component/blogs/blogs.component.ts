import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
blogDetails: any = [];
  constructor(private router: Router, private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getBlogDetails().subscribe(
      res => {
        this.blogDetails = res;
        console.log(this.blogDetails);
      }
    )
  }

  onReadMore(id: string) {
    this.router.navigate(['/blog']);
  }

}
