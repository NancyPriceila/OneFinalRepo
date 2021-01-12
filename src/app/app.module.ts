
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';


import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BankingregComponent } from './bankingreg/bankingreg.component';
import { AddbenificiaryComponent } from './FundTransfers/addbenificiary/addbenificiary.component';
import { FundtransferComponent } from './FundTransfers/fundtransfer/fundtransfer.component';
import { ImpspaymentComponent } from './FundTransfers/impspayment/impspayment.component';
import { ListbenificiariesComponent } from './FundTransfers/listbenificiaries/listbenificiaries.component';
import { ManagebenificiaryComponent } from './FundTransfers/managebenificiary/managebenificiary.component';
import { NeftpaymentComponent } from './FundTransfers/neftpayment/neftpayment.component';
import { RtgspaymentComponent } from './FundTransfers/rtgspayment/rtgspayment.component';
import { TransactionfailedComponent } from './FundTransfers/transactionfailed/transactionfailed.component';
import { TransactionService } from './services/transaction.service';
import { TransfersuccessfulComponent } from './FundTransfers/transfersuccessful/transfersuccessful.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountstatementComponent } from './dashboard/accountstatement/accountstatement.component';
import { AccountsummaryComponent } from './dashboard/accountsummary/accountsummary.component';
import { UserprofileComponent } from './dashboard/userprofile/userprofile.component';
import { SidenavListComponent } from './dashboard/navigation/sidenav-list/sidenav-list.component';
import { ToolbarComponent } from './dashboard/navigation/toolbar/toolbar.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { UserProfileService } from './services/userprofile.service';
import { AccountSummaryService } from './services/accountsummary.service';
import { AccountStatementService } from './services/accountstatement.service';
import {MatDividerModule} from '@angular/material/divider';
import { NavtabsComponent } from './dashboard/navigation/navtabs/navtabs.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { TransactionpasswordComponent } from './FundTransfers/transactionpassword/transactionpassword.component';
import {BeneficiaryService} from './services/beneficiary.service';
import { EmailtransactionService } from './services/emailtransaction.service';


var myRoutes:Routes=[
  {​​​​​path:'',pathMatch:'full',redirectTo:'home'},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"forgot",component:ForgotPasswordComponent},
  {path:"custreg",component:BankingregComponent},
  {path:"",component:FundtransferComponent},
  {path:"fundtransfer",component:FundtransferComponent},
  {path:"managebenificiary",component:ManagebenificiaryComponent},
  {path:"addbenificiary",component:AddbenificiaryComponent},
  {path:"listbeneficiaries",component:ListbenificiariesComponent},
  {path:"impspayment",component:ImpspaymentComponent},
  {path:"neftpayment",component:NeftpaymentComponent},
  {path:"rtgspayment",component:RtgspaymentComponent},
  {path:"transfersuccessful/:id",component:TransfersuccessfulComponent},
  {path:"transactionfailed/:msg/:mode",component:TransactionfailedComponent},
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'accountstatement', component: AccountstatementComponent},
  { path: 'accountsummary', component: AccountsummaryComponent },
  { path: 'fundstransfer', component: FundtransferComponent },
  { path: 'dash',component:DashComponent}
  
]
//console.log(myRoutes);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ConfirmEqualValidatorDirective,
    ForgotPasswordComponent,
    BankingregComponent,
    AddbenificiaryComponent,
    FundtransferComponent,
    ImpspaymentComponent,
    ListbenificiariesComponent,
    ManagebenificiaryComponent,
    NeftpaymentComponent,
    RtgspaymentComponent,
    TransactionfailedComponent,
    TransfersuccessfulComponent,
    AccountstatementComponent,
    AccountsummaryComponent,
    UserprofileComponent,
    SidenavListComponent,
    ToolbarComponent,
    DashComponent,
    NavtabsComponent,
    TransactionpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [UserService,TransactionService,UserProfileService,AccountSummaryService,AccountStatementService,BeneficiaryService,EmailtransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
