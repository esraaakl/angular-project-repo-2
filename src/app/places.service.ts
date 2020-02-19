import { Injectable, OnInit} from '@angular/core';
import {HttpServiceService } from './http-service.service'

@Injectable({
  providedIn: 'root'
})
export class PlacesService  {
 

  selctedPlaces;
  singlePlace;
 
  obj={
    categories:[{
      id:1,
      name:"parks",
      desc:`hdi idgwfd iaghddshf iahdiusad iahfdiuf ifhif aifdhauf iyg
      d tsdrtadf hdghddhdhdih hdi idgwfd iaghddshf iahdiusad iahfdiuf ifhif aifdhauf iygd tsdrtadf hdghddhdhdih`
    },
    {
      id:2,
      name:"space rooms",
      desc:`hdi idgwfd iaghddshf iahdiusad iahfdiuf ifhif aifdhauf iyg
      d tsdrtadf hdghddhdhdih hdi idgwfd iaghddshf iahdiusad iahfdiuf ifhif aifdhauf iygd tsdrtadf hdghddhdhdih`
    },
    {
      id:3,
      name:"VR games",
      desc:`hdi idgwfd iaghddshf iahdiusad iahfdiuf ifhif aifdhauf iyg
      d tsdrtadf hdghddhdhdih hdi idgwfd iaghddshf iahdiusad iahfdiuf ifhif aifdhauf iygd tsdrtadf hdghddhdhdih`
    },
    {
      id:4,
      name:"Playsations" ,
      desc:`hdi idgwfd iaghddshf iahdiusad iahfdiuf ifhif aifdhauf iyg
      d tsdrtadf hdghddhdhdih hdi idgwfd iaghddshf iahdiusad iahfdiuf ifhif aifdhauf iygd tsdrtadf hdghddhdhdih`
    }],
  
  
  places: [{
        id:1,
        name:"elmontza",
        catID:1,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`,
  
      },
      {
        id:2,
        name:"elmontza2",
        catID:1,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`
      },
      {
        id:3,
        name:"elmontza3",
        catID:1,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`
      },
      {
        id:4,
        name:"elmontza4",
        catID:1,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`
      },
      {
        id:5,
        name:"m3moratany",
        catID:2,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`,
  
      },
      {
        id:6,
        name:"m3mora",
        catID:2,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`
      },
      {
        id:7,
        name:"masr7 elsalam",
        catID:4,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`
      },
      {
        id:8,
        name:"city squares",
        catID:4,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`
      },
      {
        id:9,
        name:"gleem bay",
        catID:3,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`,
  
      },
      {
        id:10,
        name:"greenplaza",
        catID:3,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`
      },
      {
        id:11,
        name:"san stifano",
        catID:3,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`
      },
      {
        id:12,
        name:"arab mall",
        catID:4,
        desc:`hhdiwhd widghwid widhwuid widhwud wihduwid widhuwd wihdwuhd iwhduwhd`,
        location:`montza`
      }
    ]
  }

  dataTest;
  cats;
  places;  

  constructor( private httpService:HttpServiceService) {
    this.dataTest=this.httpService.gettingData().subscribe(
      data=>
      {
       this.cats=data;  

      }
    )
    this.dataTest=this.httpService.gettingPlaces().subscribe(
      data=>
      {
       this.places=data;  

      }
    )
   }
 


  getSingleCatData(id)
  {
    
      // for(let place of this.cats)
      // {
      //   if (place.id==id)
      //   {
      //     return place;
      //   }
      // }
    
   
   

  }
  
  getSinglePlacesOfSomeCat(id)
  {
    this.selctedPlaces=this.places.filter(function(places){
      return places.catId==id;  
   })
   return this.selctedPlaces
  }

  getSingleSpesifcPlace(id)
  {
   this.singlePlace=this.places.find(function(place)
   {
     return place.id==id;
   })
   return this.singlePlace;
  }

   
}
