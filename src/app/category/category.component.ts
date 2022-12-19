import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  title = 'Welcome';
  subtitle = 'Select your product category?';
  categories : any;

  constructor(private http: HttpClient) {}

 ngOnInit() {
  let resp = this.http.get(" https://www.nichea.co.za/nichea/categories/all");
  resp.subscribe((data)=>this.categories=data);
 }
}
