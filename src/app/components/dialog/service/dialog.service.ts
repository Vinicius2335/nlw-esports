import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  animal!: string;
  name!: string;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '520px',
      panelClass: 'custom',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
