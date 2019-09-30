import { BackendService } from "./../../services/backend.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  header: string;
  title: string;
  teamDetails: any;
  categoryDetails: any;
  email: string;
  constructor(private backendService: BackendService, private router: Router) {}

  ngOnInit() {
    localStorage.clear();
    this.backendService.getheaderDetails().subscribe(res => {
      this.header = res[0]["header"];
      this.title = res[0]["title"];
    });

    this.backendService.getTeamDetails().subscribe(res => {
      this.teamDetails = res;
    });

    this.backendService.getCategoryDetails().subscribe(res => {
      this.categoryDetails = res;
    });
  }

  contactUs() {
    let details = {
      email: this.email
    }
    this.backendService.sendEmail(details).subscribe(
      res => {
        console.log(res);
      },(error) => {
        console.log(error);
      }
    )
  }

  onShareClick() {
    this.router.navigate(['/feedback']);
  }
}
