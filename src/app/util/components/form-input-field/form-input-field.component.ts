import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormInputFieldComponent),
  multi: true,
};

@Component({
  selector: 'app-form-input-field',
  templateUrl: './form-input-field.component.html',
  styleUrls: ['./form-input-field.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR],
})
export class FormInputFieldComponent implements ControlValueAccessor {

  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() isReadOnly = false;

  private innerValue!: any;
  onChangeCb: any = () => {};
  onTouchedCb = () => {};

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCb(value);
    }
  }

  constructor() { }
  writeValue(value: any): void {
    if (value != this.innerValue){
      this.innerValue = value;
      this.onChangeCb(value);
    }
  }
  registerOnChange(onChange: any): void {
    this.onChangeCb = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouchedCb = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

}
