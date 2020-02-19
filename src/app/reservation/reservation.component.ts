import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  selctedHour: any = "select Time";
  user;
  selectedGames;
  total;
  // ........//
  selectedClasses;
  createdArray = [];

  constructor(private service: HttpServiceService) {
    this.user = this.service.getData("user");
    this.selectedGames = this.service.getData("choosenGames");
    this.total = this.service.getData("finalTotal");


    // this.selectedClasses = document.getElementsByClassName("0")
    // console.log(this.selectedClasses);

    for (let i of this.selectedGames) {
      let obj = {
        id: i.id,
        hours: "0",
        date: "0"
      }
      this.createdArray.push(obj)
    }


  }

  ngOnInit() {
  }

  getDate(val, i) {
    // console.log(val.srcElement.value)
    this.createdArray[i].date = val.srcElement.value;
    // console.log(this.createdArray)
  }

  gettingHours(val, i) {
    // console.log(val.target.text);
    this.selctedHour = val.target.text;
    this.createdArray[i].hours = val.target.text;
    // console.log(this.createdArray)
  }

  handlinSubmit() {
    console.log(this.createdArray)
  }
}