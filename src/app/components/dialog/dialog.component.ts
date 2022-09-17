import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Games } from 'src/app/util/model/games';

import { UtilService } from './../../util/services/util.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  form = this.formBuilder.group({
    game: [''],
    name: [''],
    yearPlaying: [0],
    discord: [''],
    hourStart: [''],
    hourEnd: [''],
    usaVoiceChannel: [false],
    weekDays: new FormArray<any>([])
  });

  games$!: Observable<Games[]>;
  gameSelect!: string;
  @ViewChild('weekDaysSelect') weekDaysSelect!: MatButtonToggle;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private formBuilder: NonNullableFormBuilder,
    private utilService: UtilService
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
      next: () => console.log('Anuncio Criado'),
      error: () => console.error("Erro"),
      complete: () => console.info('Insert Completado'),
    });

    this.onNoClick();
  }
}

// NOTE: VALIDAÇAO
// NOTE: Type no input, Corrigindo yearPlaying
