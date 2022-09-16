import { Component, Inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
