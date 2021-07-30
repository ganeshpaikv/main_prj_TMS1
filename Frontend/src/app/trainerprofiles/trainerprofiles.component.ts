import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TrainerService } from '../trainer.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-trainerprofiles',
  templateUrl: './trainerprofiles.component.html',
  styleUrls: ['./trainerprofiles.component.css']
})
export class TrainerprofilesComponent implements OnInit {

    trainersdata:any;
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
  
    trainers=[{
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
    }]
  
  
    constructor(public trainersObj : TrainerService, private router:Router,private http : HttpClient, public _auth :AuthService, ) { }
  
    ngOnInit(): void {
    let TrainerId = localStorage.getItem("deleteTrainerId");
    this.trainersObj.getTrainer2()
    .subscribe((trainer)=>{
      this.trainersdata = trainer;
      console.log(this.trainersdata);
  });
}
  
  deleteTrainer(trainer:any){
    let TrainerId = localStorage.getItem("deleteAuthorId");
    console.log('inside delete function deleteTrainerId ${trainer._id}');
    this.trainersObj.getTrainer(TrainerId);
    alert("Trainer deleted");
  }

  editTrainer(trainer:any)
  {
    localStorage.setItem("editTrainerId", trainer._id.toString());
    this.router.navigate(['update']);

  }
    
  allocateTrainer(trainer:any)
  {
    localStorage.setItem("allocateTrainerId", trainer._id.toString());
    this.router.navigate(['allocation']);

  } 
  }


