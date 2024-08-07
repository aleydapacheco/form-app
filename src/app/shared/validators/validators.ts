import { FormControl } from '@angular/forms';

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

//si no espera una promesa los ajustes son de tipo Sincronos
export const cantBeStrider = ( control: FormControl ) => {
    const value:string = control.value.trim().toLowerCase();
    if (value === 'strider'){
        return {
            noStrider: true,
        }
    }
    return null;
}