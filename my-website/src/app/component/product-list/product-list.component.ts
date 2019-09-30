import { ActivatedRoute } from '@angular/router';
import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category: any = "ROUND NECK";
  productList: any = [];
  constructor(private backendService: BackendService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.category = this.route.snapshot.params['category'];
    var tshirtCategory = this.category.toLowerCase().replace(/ +/g, "");
    this.backendService.getProductList(tshirtCategory).subscribe(
      res => {
       this.productList = res;
       console.log(this.productList);
      }
    )
  }

}
