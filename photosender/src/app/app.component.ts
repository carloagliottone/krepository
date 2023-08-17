import { Component, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ModalComponent } from './modal/modal.component';

import { PrintService, UsbDriver, WebPrintDriver } from 'ng-thermal-print';

import { PrintDriver } from 'ng-thermal-print/lib/drivers/PrintDriver'

interface DialogData {
  email: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username : string = "Nothing00";
  title = 'PhotoSender';
  email: string;
  
  status: boolean = false;
  usbPrintDriver: UsbDriver;
  webPrintDriver: WebPrintDriver;
  ip: string = '192.168.128.199';

  constructor(public dialog: MatDialog, private printService: PrintService) {
    this.printService.isConnected.subscribe(result => {
      this.status = result;
      if (result) {
          console.log('Connected to printer!!!');
      } else {
      console.log('Not connected to printer.');
      }
  });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });
  }

  connectToWebPrint() {
    this.webPrintDriver = new WebPrintDriver(this.ip);
    this.printService.setDriver(this.webPrintDriver, 'WebPRNT');
  }

  print() {
    this.printService.init()
        .setBold(true)
        .writeLine('Hello World!')
        .setBold(false)
        .feed(4)
        .cut('full')
        .flush();
  }
}
