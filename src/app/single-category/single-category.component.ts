

import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlacesService } from '../places.service';
import { HttpServiceService } from '../http-service.service';



@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {
  cats;
  places;
  selctedPlaces = [];
  // ......//
  singleCatId;
  singleCatData;
  singleSelecetedPlaces;
  // ...............//
  repetedLocatins = [];
  uniqe;
  rate = [1, 2, 3, 4, 5];
  id;
  arrofRates = [];
  arrofChecked = [];

  arrOfLocations = [];
  arrLocationsChecked = [];
  setOfLocation;

  filteredData = [];
  check = false;







  constructor(private route: ActivatedRoute, private placeService: PlacesService, private httpService: HttpServiceService) {




    this.route.params.subscribe((param: Params) => {
      this.singleCatId = param["id"];
      // console.log("heeeeee" + typeof (+this.singleCatId))


      this.httpService.gettingData().subscribe(
        data => {
          this.cats = data;
          this.singleCatData = this.loopingforSpecifcCategory(this.singleCatId);

        }
      )

      this.httpService.gettingPlaces().subscribe(

        data => {
          this.repetedLocatins = [];
          this.places = data;
          // console.log(this.places)
          this.singleSelecetedPlaces = this.getPlacesOfSingleCat(this.singleCatId);
          // console.log(this.singleSelecetedPlaces)

          for (let i of this.singleSelecetedPlaces) {
            this.repetedLocatins.push(i.location);
          }
          this.uniqe = new Set(this.repetedLocatins);
          for (let i of this.uniqe) {
            setTimeout(() => {
              this.id = document.getElementById(i);
              // console.log("ssssssssssssssssssssssssssss")
              this.arrOfLocations.push(this.id)
            }, 2000)
          }
          // console.log(this.arrOfLocations)

        }
      )

    })

  }

  ngOnInit() {

    // for (let i of this.uniqe) {
    //   setTimeout(() => {
    //     this.id = document.getElementById(i);
    //     console.log("ssssssssssssssssssssssssssss")
    //     console.log(this.id)
    //   }, 2000)
    // }

  }
  ngAfterViewInit() {

  }

  handling2(param) {
    // console.log(param.checked)
    // console.log(param.value)
    // console.log(param)
  }

  handling(reservation, status, kidfriendly, one, two, three, four, five) {
    this.arrofRates = [one, two, three, four, five];


    this.arrLocationsChecked = [];
    this.arrofChecked = [];

    this.check = true;
    this.filteredData = [];
    // console.log('changed')
    for (let place of this.singleSelecetedPlaces) {

      if (this.ratingChecked(place) &&
        this.locationChecked(place) &&
        this.chechkingResevartion(place, reservation) &&
        this.chechkingstatus(place, status) &&
        this.chechkkidfriendly(place, kidfriendly)) {
        console.log("yes")
        console.log(place)
        this.filteredData.push(place)
      }
    }
  }


  locationChecked(place) {
    for (let i of this.arrOfLocations) {

      if (i.checked) {
        this.arrLocationsChecked.push(i.value)
      }
    }
    if (this.arrLocationsChecked.length == 0) {
      return true
    }
    for (let i of this.arrLocationsChecked) {
      if (place.location == i) {
        return true;
      }
    }
  }

  ratingChecked(place) {
    for (let i of this.arrofRates) {

      if (i.checked) {
        this.arrofChecked.push(i.value)
      }

    }
    if (this.arrofChecked.length == 0) {
      return true
    }
    for (let i of this.arrofChecked) {
      if (place.avgrate == i) {
        return true;
      }
    }
  }

  checkRating(place, key) {
    if ((place["avgrate"] == key.value && key.checked) || key.checked == false) {

      return true
    }

    else {
      return false
    }
  }

  chechkkidfriendly(place, kidfriendly) {
    if ((place["kid-friendly"] == "true" && kidfriendly.checked) || kidfriendly.checked == false) {

      return true
    }

    else {
      return false
    }

  }
  chechkingstatus(place, status) {
    if ((place.status == "open" && status.checked) || status.checked == false) {

      return true
    }
    else {
      return false
    }

  }

  chechkingResevartion(place, reservation) {
    if ((place.reservation == "true" && reservation.checked) || reservation.checked == false) {

      return true
    }
    else {
      return false
    }

  }

  loopingforSpecifcCategory(id) {
    for (let i of this.cats) {
      if (i.id == id) {
        return i;
      }
    }
  }


  getPlacesOfSingleCat(id) {

    this.selctedPlaces = [];
    for (let place of this.places) {
      for (let i of place.catId) {
        if (i == id) {
          this.selctedPlaces.push(place)
        }
      }
    }
    return this.selctedPlaces
  }



}


