import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private headerProfileBehaviour = new BehaviorSubject(null)
  headerProfile = this.headerProfileBehaviour.asObservable();

  displayProfileIcon(loggedinparam) {
    this.headerProfileBehaviour.next(loggedinparam);
    console.log("hello from service")
    console.log(loggedinparam)
  }

  constructor(private http: HttpClient) { }



  gettingData() {
    return this.http.get("http://localhost:3000/categories");
  }

  gettingPlaces() {
    return this.http.get("http://localhost:3000/places");
  }

  gettingUsers() {
    return this.http.get("http://localhost:3000/users");
  }
  gettingPtions() {
    return this.http.get("http://localhost:3000/options");
  }

  getSingleCategory(id) {
    return this.http.get("http://localhost:3000/categories/" + id);
  }


  // ...........general geters and getters functions from session storge...............//
  setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getData(key) {
    if (!JSON.parse(localStorage.getItem(key))) {
      return []
    }
    else {

      return JSON.parse(localStorage.getItem(key))
    }
  }

}
