import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.css']
})
export class BrowseProductsComponent implements OnInit {
  categoryDetails: any = [];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getCategoryDetails().subscribe(res => {
      this.categoryDetails = res;
    })
  }

}
