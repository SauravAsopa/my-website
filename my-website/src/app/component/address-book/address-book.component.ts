import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddressSave(form: NgForm) {
    // if(form.invalid) {
    //   return
    // }
    console.log(form.value);
    let addressDetails = {
      "fullName": form.value.fullName,
      "phone": form.value.phone,
      "pincode": form.value.pincode,
      "addr": form.value.addr,
      "locality": form.value.locality,
      "city": form.value.city,
      "state": form.value.state,
      "country": form.value.country
    }
    window.localStorage.setItem('addresslist', JSON.stringify(addressDetails))
  }

}
