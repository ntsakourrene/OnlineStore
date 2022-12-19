
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{


  products : any;
  constructor(private http: HttpClient) {}

  ngOnInit(){
    let resp = this.http.get(" https://www.nichea.co.za/nichea/products/1/10/ASC/name/Car%20Care?keyword=");
    resp.subscribe((data)=>this.products=data);
  }

}
