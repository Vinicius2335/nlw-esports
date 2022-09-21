import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

constructor() { }

errorMessage(control: FormControl, label: string){
  for(const propertyName in control.errors){
    if (control.errors.hasOwnProperty(propertyName)
    && (control.touched || control.dirty || !control.valid)) {
      return this.getErrorMsg(label, propertyName, control.errors[propertyName])
    }
  }
  return null;
}

private getErrorMsg(
  fieldName: string,
  validatorName: string,
  validatorValue?: any
) {
  const config: { [key: string]: any } = {
    required: `${fieldName} é obrigatório.`,
    minlength: `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres`,
    maxlength: `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres`,
    checkedRequired: 'Selecione pelo menos um valor',
    discordInvalid: 'Discord Invalido'
  };
  return config[validatorName];
}

discordNameValidator(control: FormControl) {
  const discordName = control.value;
  if (discordName && discordName !== '') {
    const validaDiscordName = /^((.{2,32})#\d{4})/;
    return validaDiscordName.test(discordName) ? null : { discordInvalid: true };
  }
  return null;
}

  requiredMinCheckBox(min = 1) {
    const validador = (formArray: AbstractControl) => {
      if (formArray instanceof FormArray) {
        const totalChecked = formArray.controls
          .map((v: any) => v.value)
          .reduce(
            (total: any, atual: any) => (atual ? total + atual : total),
            0
          );
        return totalChecked >= min ? null : { checkedRequired: true };
      }
      throw new Error('formArray is not an instance of FormArray');
    };
    return validador;
  }

}
