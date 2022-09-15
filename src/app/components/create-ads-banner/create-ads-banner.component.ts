import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog/service/dialog.service';

@Component({
  selector: 'app-create-ads-banner',
  templateUrl: './create-ads-banner.component.html',
  styleUrls: ['./create-ads-banner.component.scss']
})
export class CreateAdsBannerComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.dialogService.openDialog();
  }

}
