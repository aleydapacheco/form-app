import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    //Para que todos los componentes de shared puedan acceder a los datos del "Router"
    //Es necesario efectuar la importacion de dicho Modulo
    RouterModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
