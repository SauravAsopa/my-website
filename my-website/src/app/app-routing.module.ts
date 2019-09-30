import { AddressListComponent } from './component/address-list/address-list.component';
import { AddressBookComponent } from './component/address-book/address-book.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { ProductDescriptionComponent } from './component/product-description/product-description.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ProductListComponent } from './component/product-list/product-list.component';
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
  { path: "products/:category", component: ProductListComponent },
  { path: "productdesciption/:productcode", component: ProductDescriptionComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "blog", component: BlogContentComponent },
  { path: "contact", component: ContactUsComponent },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'cart', component: CartListComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'addresslist', component: AddressListComponent},
  {path: 'addressbook', component: AddressBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
