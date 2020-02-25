import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  get f(){
    return this.form.controls;
  }
 
  constructor(private router: Router, private toastr: ToastrService) {}
  

  authUser() {
    this.toastr.success('Autênticação feita com Sucesso!', 'Toastr fun!');
    localStorage.setItem('loggedUser', 'true');
    this.router.navigate(['/', 'adress']);
  }

  ngOnInit(): void {
  }

}
