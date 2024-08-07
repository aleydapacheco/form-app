import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

    //validate(control: AbstractControl ): Observable<ValidationErrors | null> {
    //    const email = control.value;
    //    console.log( {email} );
    //    return of({
    //        emailTaken: true,
    //    }).pipe ( 
    //        delay( 2000 )
    //    );
    //}

    //Normalmente este es un procedimiento que se debe seguir!
    //validate(control: AbstractControl ): Observable<ValidationErrors | null> {
    //    const email = control.value;
    //    console.log( {email} );
    //    return this.http.get<any[]>(`http://localhost:3000/users?q=${ email }`)
    //        .pipe(
    //            //delay( 3000 ),
    //            map( resp => {
    //                return (resp.length === 0)
    //                ? null
    //                : { emailTaken: true }
    //            } )
    //        );
    //}

    validate(control: AbstractControl ): Observable< ValidationErrors | null> {
        const email = control.value;

        const httpCallObservable = new Observable< ValidationErrors | null >( (subscriber) => {
            console.log({email});

            if( email === 'prueba@google.com' ){
                subscriber.next({ emailTaken: true });
                subscriber.complete();
                return;
            }

            subscriber.next(null);
            subscriber.complete();
        }).pipe(
            delay( 1500 ),
        );

        return httpCallObservable;
    }

    
}