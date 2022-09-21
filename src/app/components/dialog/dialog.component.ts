import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Games } from 'src/app/util/model/games';

import { UtilService } from './../../util/services/util.service';
import { FormValidationService } from './service/form-validation.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  form = this.formBuilder.group({
    game: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    yearPlaying: [0, [Validators.required]],
    discord: ['', [Validators.required, this.formValidationService.discordNameValidator]],
    hourStart: ['', Validators.required],
    hourEnd: ['', Validators.required],
    usaVoiceChannel: [false],
    weekDays: new FormArray<any>([], Validators.required)
  });

  games$!: Observable<Games[]>;
  gameSelect!: string;
  @ViewChild('weekDaysSelect') weekDaysSelect!: MatButtonToggle;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private formBuilder: NonNullableFormBuilder,
    private utilService: UtilService,
    private toastService: ToastrService,
    public formValidationService: FormValidationService
  ) {}

  ngOnInit(): void {
    this.games$ = this.utilService.listGames();
  }

  get weekDaysFormArray() {
    return this.form.controls.weekDays as FormArray;
  }

  private addCheckboxesToForm() {
    let arrayWeekDays = this.weekDaysSelect.value;
    arrayWeekDays.forEach((value: any) =>
    this.weekDaysFormArray.push(new FormControl(value))
  )}


  onNoClick(): void {
    this.dialogRef.close();
  }

  isChecked(button: MatButtonToggle){
    return button.checked ? 'bg-violet-500' : '#393939';
  }

  onSubmit(){
    this.addCheckboxesToForm();
    this.utilService.createAnuncio(this.form.value).subscribe({
      next: () => this.toastService.success('Anúncio Criado com sucesso'),
      error: () => this.toastService.error('Erro na crição do anúncio'),
    });

    this.onNoClick();
  }
}

// BUG: problemas no campo de yearPlaying, o valor no input vem como string e na hora de salvar no banco precisa ser um int/number
