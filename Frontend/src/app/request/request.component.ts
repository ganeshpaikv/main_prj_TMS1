import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TrainerService } from '../trainer.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  trainersdata : any;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage  : boolean = true;

  alertMsg : any ='';

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



  constructor(public trainersObj : TrainerService, private router:Router,private http : HttpClient, public _auth :AuthService, ) { }

   ngOnInit(): void {


    this.alertMsg = localStorage.getItem('trainerAlertMsg');    
    setTimeout(() => {
    this.trainersObj.getTrainers()
    .subscribe((trainer)=>{
      this.trainersdata =trainer;
      console.log(this.trainersdata);
      localStorage.removeItem('trainerAlertMsg'); 
      });
       }, 50);
       console.log (`Alert msg : ${this.alertMsg}` );
    }

    getTrainer(trainer: any)
    {
      localStorage.setItem("getAuthorId", trainer._id.toString());
      this.router.navigate(['approval']);
    };

 
   
  acceptTrainer(trainer: any)
  {
    localStorage.setItem("editTrainerId", trainer._id.toString());
    this.router.navigate(['editTrainer']);
    localStorage.removeItem('trainerAlertMsg'); 
  };

  rejectTrainer(trainer: any)
  {
    localStorage.setItem("deleteTrainerId", trainer._id.toString());
    this.router.navigate(['request']);
    localStorage.removeItem('trainerAlertMsg'); 
  };


}
