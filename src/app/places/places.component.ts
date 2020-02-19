import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { HttpServiceService } from '../http-service.service'

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  places;
  singlePlace; 0
  // ........///
  singlePlaceId;
  singlePlaceData; //obj
  // ........//
  placeLoggedin;
  options;
  optionsOfSpesificPlace = [];
  constructor(private route: ActivatedRoute, private placeService: PlacesService, private httpService: HttpServiceService, private router: Router) {

    this.route.params.subscribe((param: Params) => {
      this.singlePlaceId = param["id"];


      this.httpService.gettingPlaces().subscribe(

        data => {
          this.places = data;
          this.singlePlaceData = this.getSingleSpesifcPlace(this.singlePlaceId);

        }
      )

      this.httpService.gettingPtions().subscribe(data => {
        this.options = data;
        this.gettingSpesifcOptions(this.singlePlaceId)
      })

    })
    this.placeLoggedin = this.httpService.getData("loggedin");
  }

  ngOnInit() {

  }
  gettingSpesifcOptions(id) {
    for (let option of this.options) {
      if (option.placeId == id) {
        this.optionsOfSpesificPlace.push(option)
      }
    }
  }
  navigateToReservation() {
    if (this.placeLoggedin && this.placeLoggedin.length != 0) {
      this.router.navigate(["/reservation", this.singlePlaceData.id])
    }
    else {
      this.router.navigate(["/register"])
    }

  }


  getSingleSpesifcPlace(id) {

    for (let i of this.places) {
      if (i.id == id) {
        this.singlePlace = i;
      }
    }

    return this.singlePlace;
  }

}
