import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


interface Image {
  img: string;
  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
 
  customOptions: OwlOptions = {

    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  slidesStor: Image[] = [ 
    { img: "./../../assets/Home/uriel-soberanes-MxVkWPiJALs-unsplash.png" },
    { img: "./../../assets/Home/uriel-soberanes-MxVkWPiJALs-unsplash.png" },
    


   

  ]

 


 
  ngOnInit() {
  
  }

}
