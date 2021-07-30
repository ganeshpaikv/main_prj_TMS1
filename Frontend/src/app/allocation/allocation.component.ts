import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TrainerService } from '../trainer.service';



@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
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
    employment:'',
    approved:'',
    startdate:'',
    enddate:'',
    time:'',
    coursename:'',
    courseid:'',
    batchid:'',
    meetingvenue:'',
    trainerId:''

  }
  constructor(public trainerObj : TrainerService, private router:Router, private http : HttpClient) { }

  ngOnInit(): void {
 let trainerId = localStorage.getItem('trainerId');

}
verify1(formValue:NgForm){
  this.trainerObj.newAllocation( this.trainer).subscribe((data)=>{
    
        alert("Allocation done successfully");
        this.router.navigate(['/trainerprofiles']);   
    
    })
  
 
  localStorage.setItem('trainerAlertMsg', `The form submitted successfully`); 
 
}

}
