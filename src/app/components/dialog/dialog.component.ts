import { Component, Inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Games } from 'src/app/util/model/games';

import { UtilService } from './../../util/services/util.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  form = this.formBuilder.group({
    game: [''],
    name: [''],
    yearsPlaying: [''],
    discord: [''],
    weekDays: [''],
    hourStart: [''],
    hourEnd: [''],
    useVoiceChannel: ['']
  });

  games$!: Observable<Games[]>;
  gameSelect!: string;
  buttonChecked!: MatButtonToggle;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: NonNullableFormBuilder,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.games$ = this.utilService.listGames();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isChecked(button: MatButtonToggle){
    return button.checked ? 'bg-violet-500' : '#393939';
  }

  onSubmit(){
    console.log(this.form.value.game);//ok
    console.log(this.form.value.name);
    console.log(this.form.value.yearsPlaying);
    console.log(this.form.value.discord);
    console.log(this.form.value.hourStart); //ok
    console.log(this.form.value.hourEnd); //ok
    console.log(this.form.value.useVoiceChannel); //ok
    this.onNoClick();
  }
}

// NOTE: VALIDAÇAO
// NOTE: 