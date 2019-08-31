import { BackendService } from "./../../services/backend.service";
import { Component, OnInit } from "@angular/core";

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

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getheaderDetails().subscribe(res => {
      this.header = res[0]["header"];
      this.title = res[0]["title"];
    });

    this.backendService.getTeamDetails().subscribe(res => {
      this.teamDetails = res;
    })

    this.backendService.getCategoryDetails().subscribe(res => {
      this.categoryDetails = res;
      console.log(this.categoryDetails);
    })
  }
}
