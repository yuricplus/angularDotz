import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rescue',
  templateUrl: './rescue.component.html',
  styleUrls: ['./rescue.component.css']
})
export class RescueComponent implements OnInit {
  name: string;
  img: string;
  price: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(!localStorage.loggedUser){
      this.router.navigate(['/', 'signup']);
    }
    this.route.queryParams
      .filter(params => params.name)
      .subscribe(params => {
        this.name = params.name;
        this.img = params.img;
        this.price = params.price;
      });
  }

}
