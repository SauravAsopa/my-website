import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule, MatCardModule, MatButtonModule} from '@angular/material'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { BlogContentComponent } from './component/blog-content/blog-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { BrowseProductsComponent } from './component/browse-products/browse-products.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ProductDescriptionComponent } from './component/product-description/product-description.component';
import { FooterComponent } from './component/footer/footer.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { AddressBookComponent } from './component/address-book/address-book.component';
import { AddressListComponent } from './component/address-list/address-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BlogsComponent,
    BlogContentComponent,
    LoginComponent,
    SignupComponent,
    BrowseProductsComponent,
    ProductListComponent,
    ContactUsComponent,
    ProductDescriptionComponent,
    FooterComponent,
    ShoppingCartComponent,
    CartListComponent,
    FeedbackComponent,
    AddressBookComponent,
    AddressListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
