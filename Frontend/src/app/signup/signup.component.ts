import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router} from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  User= {
    emailaddress: '',
    password    : '',
    password2   : '',
    firstname   : '',
    lastname    : ''
};


SignUpError ={
  error : false,
  errorMsg : ''
};

pwd2Valid : boolean=true;
submitted : boolean=false;
 force = 0;
 PwdValidDis : boolean =false;
 pwdPatern   : boolean = false;

  constructor(private _auth : AuthService, private _router : Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "remotely",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/undraw_remotely_2j6y.svg")
    );
   }

  ngOnInit(): void {
    this.pwd2Valid = true;
    this.submitted = false;
    this.force     = 0;
    this.PwdValidDis = false;
  }

  validatePwd2(event: KeyboardEvent){
    if (this.User.password==this.User.password2){
        this.pwd2Valid = true;
    }
    else {      
      this.pwd2Valid = false;
      console.log(`inside else ${this.pwd2Valid}`)
    }
  }
  
  signup(){   
    this._auth.SignUpUser(this.User)
    .subscribe(
      res => {
        console.log(res);
        console.log('success registration');
        this.SignUpError.errorMsg= '';
        this.SignUpError.error = false;
        this._router.navigate(['/login'])
      },
      err => {
        console.log(err); 
        console.log('faliure registration');         
        this.SignUpError.errorMsg= err.error;
        this.SignUpError.error = true;
        ;
        
      }
    ) 
  }


 

 validatePasswordStrength()
  {
    // console.log('validate password strength');
    this.PwdValidDis = true;
    this.pwdPatern = false;
    let strength = {
        1: 'Very Weak',
        2: 'Weak',
        3: 'Medium',
        // 4: 'Strong',
        4: 'Very Strong'
      };

      let strengthValue = {
        'caps': false,
        'length': false,
        // 'special': false,
        'numbers': false,
        'small': false
      };

      if(this.User.password.length >= 8) {
        strengthValue.length = true;
      } 
      for(let index=0; index < this.User.password.length; index++) 
      {
          let char = this.User.password.charCodeAt(index);
          if(!strengthValue.caps && char >= 65 && char <= 90) {
              strengthValue.caps = true;
          } else if(!strengthValue.numbers && char >=48 && char <= 57){
            strengthValue.numbers = true;
          } else if(!strengthValue.small && char >=97 && char <= 122){
            strengthValue.small = true;
          } else if(!strengthValue.numbers && char >=48 && char <= 57){
            strengthValue.numbers = true;
          } 
          // else if(!strengthValue.special && (char >=33 && char <= 47) || (char >=58 && char <= 64)) {
          //   strengthValue.special = true;
          // }
      }
    
      this.force = 0; 
      if(strengthValue ['caps']  === true) 
        {
          this.force++;
        }  
      if(strengthValue ['length']  === true) 
        {
          this.force++;
        }       
      if(strengthValue ['numbers']  === true) 
        {
          this.force++;
        }      
      if(strengthValue ['small']  === true) 
        {
          this.force++;
        }   
      if (this.force==4){
        this.pwdPatern = true;
      }
        console.log(`the force ${this.force }`);
      // for(let metric in strengthValue) 
      //   {
      //    if(strengthValue ['caps']  === true) 
      //     {
      //      strengthIndicator++;
      //     }
      //   }  
  }


}
