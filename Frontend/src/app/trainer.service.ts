import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  trainer={
    name:"",
    email:"",
    phone:"",
    address:"",
    qualification:"",
    skillset:"",
    company:"",
    designation:"",
    ictakcourses:"",
    photo:"",
    ID:""
  }

  constructor(public http : HttpClient) { }

  newTrainer(image:any, trainer : any)
  {
    console.log('insert trainer')
    const formData = new FormData();
    formData.append('file', image);  
    formData.append('name', trainer.name); 
    formData.append('email', trainer.email); 
    formData.append('phone', trainer.phone); 
    formData.append('address', trainer.address); 
    formData.append('qualification', trainer.qualification); 
    formData.append('skillset', trainer.skillset ); 
    formData.append('company', trainer.company ); 
    formData.append('designation', trainer.designation ); 
    formData.append('ictakcourses',  trainer.ictakcourses); 
    formData.append('photo', trainer.photo); 
    formData.append('ID', trainer.ID ); 
    return this.http.post('http://localhost:3000/enrollment', formData)
     .subscribe(data =>{console.log(data)});
  }

}
