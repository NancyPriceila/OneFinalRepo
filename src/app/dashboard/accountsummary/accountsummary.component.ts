import { Component, OnInit } from '@angular/core';
import { AccountSummaryService } from 'src/app/services/accountsummary.service';


@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {
  id:any;
  accountsummary:any;
  recent_transactions:any;
  recent_transactionstoggle:boolean=false;
  
  constructor(private accountSummaryService:AccountSummaryService) {
    this.id=localStorage.getItem("userid");
    this.accountSummaryService.getAccountSummaryFromApi(this.id).subscribe(
      user=>{this.accountsummary=user,
        console.log(this.accountsummary);}
    )
    this.accountSummaryService.getRecentTransactionsFromApi(this.id).subscribe(
      user=>{this.recent_transactions=user,
        console.log(this.recent_transactions);}
    )
   }

   ShowRecentTransactions()
     {
        if(this.recent_transactionstoggle==true)
        {
          this.recent_transactionstoggle = false;
        }
          
        else  
          this.recent_transactionstoggle=true
     }

  ngOnInit(): void {
  }

}
