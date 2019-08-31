import { BrowseProductsComponent } from './component/browse-products/browse-products.component';
import { LoginComponent } from './component/login/login.component';
import { BlogContentComponent } from "./component/blog-content/blog-content.component";
import { BlogsComponent } from "./component/blogs/blogs.component";
import { HomeComponent } from "./component/home/home.component";
import { HeaderComponent } from "./component/header/header.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "products", component: BrowseProductsComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "blog", component: BlogContentComponent },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
