import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/Services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  emailData:any={
    to:'',
    subject:'',
    message:''
  }

  spinner:boolean=false;

  constructor(private emailSrv:EmailService,private snakSev:MatSnackBar){

  }

  

  sendEmail(){
    this.spinner=true;
    if(this.emailData.to =='' || this.emailData.subject =='' || this.emailData.message ==''){
      this.spinner=false;
          this.snakSev.open("Feilds are Requried....","OK");
          return;
    }else{
      this.emailSrv.sendEmail(this.emailData).subscribe((res:any)=>{
        this.spinner=false;
        this.snakSev.open("Email Send Successfully..","Done");

      })
    }
   
  }
  clear(){
    this.emailData={
      to:'',
    subject:'',
    message:''
    }
  }

}
