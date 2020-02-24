import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdressComponent } from './components/adress/adress.component';
import { ExtractComponent } from './components/extract/extract.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { RescueComponent } from './components/rescue/rescue.component';
import { ListRequestComponent } from './components/list-request/list-request.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AuthComponent,
    AdressComponent,
    ExtractComponent,
    ListProductsComponent,
    RescueComponent,
    ListRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
