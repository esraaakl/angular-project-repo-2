import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

import * as $ from 'jquery';


@Component({
  selector: 'app-weekend',
  templateUrl: './weekend.component.html',
  styleUrls: ['./weekend.component.scss']
})
export class WeekendComponent implements OnInit {
  holidayForm: FormGroup;
  userObj;
  user=[];
  weekEnd={}
  constructor(private formBuilder: FormBuilder , private http:HttpServiceService) { }

  ngOnInit() {
    this.holidayForm = this.formBuilder.group({
      time: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-z]\w{1,}@[a-z]{1,}.com$/)]],

    })
    
    

    
   this.user.push(this.http.getData("user"))
   console.log(this.user);
   
   $('#notSend').click(function(){
     $('.email').css("display","block")
   })
   $('#send').click(function(){
    $('.email').css("display","none")
  })


  }
  onSubmit(form){

  }
}
