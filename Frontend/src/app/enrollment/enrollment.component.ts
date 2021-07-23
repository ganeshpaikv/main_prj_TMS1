import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { mixinDisabled } from '@angular/material/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TrainerService } from '../trainer.service';
//import { TrainerComponent } from '../trainer/trainer.component';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  trainer={
    name:'',
    email:'',
    phone:'',
    address:'',
    qualification:'',
    skillset:'',
    company:'',
    designation:'',
    ictakcourses:'',
    photo:'',
    ID:''
  }
  name = 'Angular';  

  categories = [  
    {id: 1, name: 'Full Stack Development'},  
    {id: 2, name: 'Data Science and Analytics'},  
    {id: 3, name: 'Robotic Process Automation'},  

  ]; 
  image: any; 
      
    
  

  constructor(public trainerObj : TrainerService, private router:Router, private http : HttpClient) { }

  ngOnInit(): void {
    
  }


  verify(formValue:NgForm){
  
    this.trainer.photo = this.trainer.photo.replace('C:\\fakepath\\','');
    this.trainerObj.newTrainer(this.image, this.trainer).subscribe((data)=>{
      if(data.message!=""){
        alert("Trainer already exists.Please change email");}
        else{
          alert("Trainer added successfully");
          this.router.navigate(['/user']);   
        }
      })
    
   
    localStorage.setItem('trainerAlertMsg', `The form submitted successfully`); 
   
  }
  

  selectImage(event : any) {
    console.log('select image')
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      console.log('inside if event')
    }  
  }
  
}
