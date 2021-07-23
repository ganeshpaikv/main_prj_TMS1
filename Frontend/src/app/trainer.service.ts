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
courses:any;
  constructor(public http : HttpClient) { }

  newTrainer(image:any, trainer : any)
  {
    this.courses=JSON.stringify(trainer.ictakcourses);
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
    formData.append('ictakcourses',  this.courses); 
    formData.append('photo', trainer.photo); 
    formData.append('ID', trainer.ID ); 
    return this.http.post<any>('http://localhost:3000/userhome/form',formData);
    
  }
  
   getTrainers(){
    return this.http.get('http://localhost:3000/requests')
  };
  getTrainer(id:any){
    return this.http.get("http://localhost:3000/"+id);
  };

 
  AcceptTrainer(id:any){
    return this.http.get("http://localhost:3000/requests/accept/"+id)
  }
  RejectTrainer(id:any){
    return this.http.delete("http://localhost:3000/requests/delete/"+id)
  }

}
