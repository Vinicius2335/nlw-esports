import { FormInputFieldComponent } from './components/form-input-field/form-input-field.component';
import { AppMaterialModule } from './app-material.module';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [FormInputFieldComponent],
  imports: [AppMaterialModule],
  exports: [FormInputFieldComponent, AppMaterialModule],
  providers: [],
})
export class UtilModule { }

