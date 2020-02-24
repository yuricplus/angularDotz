import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs/Observable";
import { HttpClient } from  "@angular/common/http";

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
  constructor(private  httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient
    .get<Extract[]>("https://raw.githubusercontent.com/yuricplus/api-mocks/master/extract-user.json")
    .subscribe(data => this.extractInfo = data);
  }

}
