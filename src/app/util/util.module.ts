import { FormInputFieldComponent } from './components/form-input-field/form-input-field.component';
import { AppMaterialModule } from './app-material.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormInputFieldComponent],
  imports: [AppMaterialModule, FormsModule],
  exports: [FormInputFieldComponent, AppMaterialModule],
  providers: [],
})
export class UtilModule { }

