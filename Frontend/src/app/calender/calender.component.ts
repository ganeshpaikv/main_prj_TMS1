import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  viewDate: Date = new Date();
  
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  
  constructor() { }

  ngOnInit(): void {
    
  }
 
}
