import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(1)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', Validators.required)
  });

  username: object = {};
  email: string = "";
  password: string = "";

  get f(){
    return this.form.controls;
  }

  constructor(private router: Router) {}

  signup() {
    this.router.navigate(['/', 'auth']);
  }

  ngOnInit(): void {}

}

