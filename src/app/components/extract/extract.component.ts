import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs/Observable";
import { HttpClient } from  "@angular/common/http";
import { Router } from '@angular/router';

class Extract {
  extract: object;
  points: number;
  data: object
}

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})

export class ExtractComponent implements OnInit {

  extractInfo = <any>{}

  customersObservable : Observable<Extract[]>;
  constructor(private  httpClient:HttpClient, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.loggedUser){
      this.router.navigate(['/', 'signup']);
    }
    this.httpClient
    .get<Extract[]>("https://raw.githubusercontent.com/yuricplus/api-mocks/master/extract-user.json")
    .subscribe(data => this.extractInfo = data);
  }

}
