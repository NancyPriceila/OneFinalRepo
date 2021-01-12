import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/userprofile.service';
import { tblCustomers } from 'src/app/models/tblCustomers.model';
// import { UserProfile } from '../models/userprofile.model';
// import { UserProfileService } from '../services/userprofile.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
    id:any;
    userprofile:any;
    Reference_id:number=2;
    tblcustomer:tblCustomers;
    updateprofile:any;
    formGroup:boolean=false;
    
   constructor(private userProfileService: UserProfileService) {
        this.tblcustomer = new tblCustomers();
        this.id=localStorage.getItem("userid"); 
        console.log(this.id);
        this.userProfileService.getUserProfileFromApi(this.id).subscribe(
          user=>{this.userprofile=user,
            console.log(this.userprofile);}
        )

              
      
     }  

     ShowFormGroup()
     {
        if(this.formGroup==true)
          this.formGroup = false;
        else  
          this.formGroup=true
     }

     EditEmailDetails()
     {
      //   this.tblcustomer.email_id = this.userprofile[6];
       
       this.userProfileService.EditEmailId(this.id,this.tblcustomer).subscribe(
        user=>{console.log("Called")} )
       
     }

     EditMobileNumberDetails()
     {
      //   this.tblcustomer.email_id = this.userprofile[6];
       
       this.userProfileService.EditMobileNumber(this.id,this.tblcustomer).subscribe(
        user=>{console.log("Called")} )
     }

     EditResidentialAddressDetails()
     {
      //   this.tblcustomer.email_id = this.userprofile[6];
       
       this.userProfileService.EditResidentialAddress(this.id,this.tblcustomer).subscribe(
        user=>{console.log("Called")} )
     }

     EditPermanentAddressDetails()
     {
      //   this.tblcustomer.email_id = this.userprofile[6];
       
       this.userProfileService.EditPermanentAddress(this.id,this.tblcustomer).subscribe(
        user=>{console.log("Called")} )
     }

     EditOccupationTypeDetails()
     {
      //   this.tblcustomer.email_id = this.userprofile[6];
       
       this.userProfileService.EditOccupationType(this.id,this.tblcustomer).subscribe(
        user=>{console.log("Called")} )
     }

  ngOnInit(): void {
  }

}
