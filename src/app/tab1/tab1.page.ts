import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {


// =========== slider js ==============
	slideOpts = {
    autoplay: {
      delay: 4000,

    },
    zoom: false,
    effect: 'flip',
    spaceBetween: 10,
     slidesPerView: 1.2,
  };

// =========== end slider js ==============

 // ===========trending slider js ==============
   sliderConfig2 = {
    zoom: false,
    slidesPerView: 2.3,
    spaceBetween: 3,
    centeredSlides: false
  };
// =========== end slider js ==============
  constructor() { }

  ngOnInit() {
  }

}
