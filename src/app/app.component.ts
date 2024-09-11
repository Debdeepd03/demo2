import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo2';
  message:string | undefined;
  private s:StudentService;
  constructor(ss:StudentService){
    this.s=ss;
    alert("I am Constructor!!")
  }
ngOnInit()
{
this.message=this.s.getTitle();
alert("I am NgOnInit!!")
}
}
