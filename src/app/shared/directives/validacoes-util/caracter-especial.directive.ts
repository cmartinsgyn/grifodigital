import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[appCaracterEspecial]',
    providers: [{
    provide: NG_VALIDATORS,
    useExisting: CaracterEspecialDirective,
    multi: true
    }]
})
export class CaracterEspecialDirective implements Validator {
    @Input() appCaracterEspecial: string;

    validate(control: AbstractControl): {[key: string]: any} |null {
    return null;
    }



}

