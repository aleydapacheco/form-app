import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';



@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // Hay que asegurarse de importar reactiveFormsModule ya que sin el 
    //no se podra interactuar con lo formularios y la logica de los 
    //formularios
    ReactiveFormsModule
  ]
})
export class AuthModule { }
