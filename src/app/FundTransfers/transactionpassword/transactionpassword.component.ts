import { Component, OnInit } from '@angular/core';
import { MatDialogRef ,MatDialog} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field';

@Component({
  selector: 'app-transactionpassword',
  templateUrl: './transactionpassword.component.html',
  styleUrls: ['./transactionpassword.component.css']
})
export class TransactionpasswordComponent implements OnInit {
password="";
  constructor(public dialogRef:MatDialogRef<TransactionpasswordComponent>) { }

  ngOnInit(): void {
  }

  onClick():void{
    this.dialogRef.close();
  }
}
