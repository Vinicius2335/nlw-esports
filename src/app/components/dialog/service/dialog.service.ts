import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericEmiterService } from 'src/app/util/services/generic-emiter.service';

import { DialogComponent } from '../dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '520px',
      panelClass: 'custom',
    });

    dialogRef.afterClosed().subscribe(() => {
      GenericEmiterService.get('dialogClosed').emit(true);
    });
  }
  
}
