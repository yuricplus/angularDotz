import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs/Observable";
import { HttpClient } from  "@angular/common/http";

class Produtct {
  name: string;
  price: number;
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {

  productsList = {}
  
  customersObservable : Observable<Produtct[]>;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient
    .get<Produtct[]>("https://raw.githubusercontent.com/yuricplus/api-mocks/master/list-product.json")
    .subscribe(data => this.productsList = data);
  }
}
