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
  singlePlace;
  // ........///
  singlePlaceId;
  singlePlaceData;
  // ........//
  placeLoggedin;
  options;
  optionsOfSpesificPlace = [];
  // ..................//
  checkFav: boolean = false;
  favs;
  user;
  spesifcFavId;
  
  constructor(private route: ActivatedRoute, private placeService: PlacesService, private httpService: HttpServiceService, private router: Router) {

    this.route.params.subscribe((param: Params) => {
      this.singlePlaceId = param["id"];
      this.user = this.httpService.getData("user");

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

      this.httpService.getFav().subscribe(data => {
        this.favs = data;
        this.gettingSpesificOfFavs()
      })
    })
    this.placeLoggedin = this.httpService.getData("loggedin");
   
  }

  ngOnInit() {

  }

  gettingSpesificOfFavs() {
    //  awl ma render el page bayshof hawa mawgod wala la?
    for (let fav of this.favs) {
      // console.log("na gawaaaaa el for")
      if (fav.placeId == this.singlePlaceId && fav.userId == this.user.id) {
        this.checkFav = true;
        this.spesifcFavId = fav.id;
        // console.log("na gawaaaaa el if")
        // lw mawgod hasglha fi el local storge lw msh mwgod 5alas
        this.httpService.setData("favid", this.spesifcFavId);
        break;
      }
    }

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


  checkingFavs() {

    if (this.checkFav == true) {
      this.RemoveFromFavs()
    }
    else {
      this.addToFavs()
    }
  }



  RemoveFromFavs() {
    this.placeLoggedin = this.httpService.getData("loggedin");
    if (this.placeLoggedin == true) {
      this.checkFav = false;
      // console.log("22222222222222222")
      this.spesifcFavId = this.httpService.getData("favid")
      this.httpService.deleteFav(this.spesifcFavId).subscribe(data => {
        // console.log("deleted")
      })

    }

    else {
      alert("you have to register")
      this.router.navigate(["/register"])
    }

  }


  addToFavs() {
    this.placeLoggedin = this.httpService.getData("loggedin");

    if (this.placeLoggedin == true) {
      let headers = { "Conetent-Type": "application/json" }
      let body = {
        "placeId": this.singlePlaceId,
        "userId": this.user.id
      }
      this.httpService.postFav(body, headers).subscribe(
        data => {
          // console.log(data)
          this.checkFav = true;
          // this.gettingSpesificOfFavs()
          this.httpService.getFav().subscribe(data => {
            this.favs = data;
            this.gettingSpesificOfFavs()
          })


          // console.log("1111111111111111111111111")

        }
      )
    }
    else {
      alert("you have to register")
      this.router.navigate(["/register"])
    }
  }
  // start img slider code
  mainImg ;
  leftArrow;
  rightArrow;
  onClick(img){

    this.mainImg = document.getElementsByClassName('master-img2')[0]
    this.mainImg.src = img.src
    console.log(this.mainImg)
    img.classList.add("selected");
    img.nextElementSibling.classList.remove('selected')
        img.previousElementSibling.classList.remove('selected');

        document.querySelectorAll(".thumb-img")[0].addEventListener('click',function(){
          document.querySelectorAll(".thumb-img")[2].classList.remove('selected')
        })
  }

  onLeftClick(leftArrow){
this.leftArrow=document.querySelector('.selected')
this.leftArrow.previousElementSibling.click()
  }
  onRightClick(rightArrow){
    this.rightArrow=document.querySelector('.selected')
    this.rightArrow.nextElementSibling.click()
      }
  // end img slider code
}
