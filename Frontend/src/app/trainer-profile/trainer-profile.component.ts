import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { mixinDisabled } from '@angular/material/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TrainerService } from '../trainer.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {
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
    ID:'',
    employment:''
  }
  categories = [  
    {id: 1, name: 'Full Stack Development'},  
    {id: 2, name: 'Data Science and Analytics'},  
    {id: 3, name: 'Robotic Process Automation'},  

  ]; 
  image: any; 
  Trainer:any
  
 

  constructor(public trainerObj : TrainerService, private router:Router, private http : HttpClient) { }

  ngOnInit(): void {
   

    let trainerEmail = localStorage.getItem('currentUser');
    this.trainerObj.getTrainer(trainerEmail)
    .subscribe((trainerItem)=>{
      this.trainer= JSON.parse(JSON.stringify(trainerItem));
    
      console.log(this.trainer)
      });
  

  }

}
