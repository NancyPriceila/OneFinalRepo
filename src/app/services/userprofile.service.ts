  
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tblCustomers } from '../models/tblCustomers.model';



@Injectable()
export class UserProfileService{

    constructor(private getHttp:HttpClient,private putHttp:HttpClient){
        
    }
    public getUserProfileFromApi(id:any){
        return this.getHttp.get("http://localhost:63882/api/UserProfile/"+id);
    }

    public EditEmailId(Reference_id:any,tblcustomer:tblCustomers){
        return this.putHttp.put("http://localhost:63882/EditDetails/EditEmail/?refid=2",tblcustomer);
    }

    public EditMobileNumber(Reference_id:any,tblcustomer:tblCustomers){
        return this.putHttp.put("http://localhost:63882/EditDetails/EditMobileNumber/?refid=2",tblcustomer);
    }

    public EditResidentialAddress(Reference_id:any,tblcustomer:tblCustomers){
        return this.putHttp.put("http://localhost:63882/EditDetails/EditResidentialAddress/?refid=2",tblcustomer);
    }

    public EditPermanentAddress(Reference_id:any,tblcustomer:tblCustomers){
        return this.putHttp.put("http://localhost:63882/EditDetails/EditPermanentAddress/?refid=2",tblcustomer);
    }

    public EditOccupationType(Reference_id:any,tblcustomer:tblCustomers){
        return this.putHttp.put("http://localhost:63882/EditDetails/EditOccupationType/?refid=2",tblcustomer);
    }

}