import { BackendService } from './../../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  title: string;
  primaryPara: string;
  secondaryPara: string;
  finalPara: string;
  footer_para: string;
  writtenBy: string;
  datePublished: any;

  constructor(private route: ActivatedRoute, private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getBlogDetails().subscribe(
      res => {
        this.title = res[0]['title'];
        this.primaryPara = res[0]['primary_para'];
        this.secondaryPara = res[0]['secondary_para'];
        this.finalPara = res[0]['final_para'];
        this.footer_para = res[0]['footer_para'];
        this.writtenBy = res[0]['written_by'];
        this.datePublished = moment().format('MMM DD, YYYY');
        console.log(this.datePublished);
      }
    )
  }

}
