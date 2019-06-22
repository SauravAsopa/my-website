import { BlogContentComponent } from "./component/blog-content/blog-content.component";
import { BlogsComponent } from "./component/blogs/blogs.component";
import { HomeComponent } from "./component/home/home.component";
import { HeaderComponent } from "./component/header/header.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "blog", component: BlogContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
