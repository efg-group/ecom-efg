import { Component, OnInit } from '@angular/core';

import { SwiperComponent } from "swiper/angular";

import 'swiper/scss';

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
} from "swiper";

import { BehaviorSubject } from "rxjs";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hero=false;


  constructor() { 
    // this.hero="sabbir";
  }

  ngOnInit(): void {
  }

  breakpoints = {
    360: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3.1, spaceBetween: 10 },
    1024: { slidesPerView: 4.2, spaceBetween: 20 }
  };

  breakPointsToggle: boolean | undefined;
  breakpointChange() {
    this.breakPointsToggle = !this.breakPointsToggle;
    this.breakpoints = {
      360: { slidesPerView: 2, spaceBetween: 20 },
      640: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 20 }
    };
  }



  handleHeroName = () => {
    this.hero=!this.hero;
  }

}
