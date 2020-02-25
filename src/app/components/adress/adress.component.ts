import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

  form = new FormGroup({
    cep: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    neighborhood: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private toastr: ToastrService) {}
 
  cep: string = '';
  city: string = '';
  neighborhood: string = '';
  street: string = '';
  number: string = '';

  get f(){
    return this.form.controls;
  }

  async adress(cep: string, city: string, neighborhood: string, street: string, number: string) {
    const UserAdress = {
      Usercep: cep,
      UserCity: city,
      UserNeighborhood: neighborhood,
      USerStreet: street,
      UserNumber: number
    }
    localStorage.setItem('UserAdress', JSON.stringify(UserAdress))
    this.toastr.success('Endereço cadastrado com sucesso!', 'OBA!');
    await this.router.navigate(['/', 'products'])
    location.reload()
  }

  ngOnInit(): void {
  }

}
