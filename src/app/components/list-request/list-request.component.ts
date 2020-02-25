import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs/Observable";
import { HttpClient } from  "@angular/common/http";
import { Router } from '@angular/router';

class Rescue {
  name: string;
  price: number;
  status: string;
}

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})

export class ListRequestComponent implements OnInit {

  rescueList = <any>{
    data: {}
  }
  
  customersObservable : Observable<Rescue[]>;
  constructor(private  httpClient:HttpClient, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.loggedUser){
      this.router.navigate(['/', 'signup']);
    }
    this.httpClient
    .get<Rescue[]>("https://raw.githubusercontent.com/yuricplus/api-mocks/master/rescue-product.json")
    .subscribe(data => this.rescueList.data = data);
  }

}
