import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdressComponent } from './components/adress/adress.component';
import { ExtractComponent } from './components/extract/extract.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { RescueComponent } from './components/rescue/rescue.component';
import { ListRequestComponent } from './components/list-request/list-request.component';

const routes: Routes = [
  { 
    path: 'signup',
    component: SignupComponent 
  },
  { 
    path: 'auth',
    component: AuthComponent 
  },
  { 
    path: 'adress',
    component: AdressComponent 
  },
  { 
    path: 'extract',
    component: ExtractComponent
  },
  { 
    path: 'products',
    component: ListProductsComponent
  },
  { 
    path: 'rescue',
    component: RescueComponent
  },
  {
    path: 'request',
    component: ListRequestComponent
  },
  { path: '**', 
    redirectTo: 'products' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
