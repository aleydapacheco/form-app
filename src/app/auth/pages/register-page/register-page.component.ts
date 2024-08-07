import { ValidatorsService } from './../../../shared/service/validators.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';
//import { cantBeStrider } from 'src/app/shared/validators/validators';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['',[ Validators.required,Validators.pattern(customValidators.firstNameAndLastnamePattern) ]],
    email: ['',[Validators.required, Validators.pattern(customValidators.emailPattern)],[ this.emailValidatorService]],
    username: ['',[Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['',[Validators.required, Validators.minLength(6)]], 
    password2: ['',[Validators.required]],
  }, {
    validators: [
      this.validatorsService.isFieldOneEqualFieldTwo('password','password2'),
    ]
  });

  //Seccion de inyeccion de Dependencias
  constructor ( 
    private validatorsService: ValidatorsService,
    private fb: FormBuilder,
    private emailValidatorService: EmailValidatorService,
  ) {}

  //Metodos
  isValidField( field:string ){
    return this.validatorsService.isValidField( this.myForm, field );
  }

  onSubmit() {
    
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }

}
