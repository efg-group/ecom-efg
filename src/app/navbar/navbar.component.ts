
import { ChangeDetectorRef, Component, NgZone, ViewChild  } from "@angular/core";
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
  selector:'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css'],
  // styles: [
  //   `
  //     .bg-yellow {
  //       background-color: yellow;
  //     }
  //     .transition {
  //       transition: background 0.25s ease, color 0.25s ease;
  //     }
  //     .active-slide {
  //       background-color: green;
  //       color: #fff;
  //     }
  //     .bg-blue {
  //       background-color: blue;
  //       color: #fff;
  //     }
  //   `
  // ],
})
export class NavbarComponent  {

  // constructor() { }

  // ngOnInit(): void {
  // }

  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

  show: boolean | undefined;
  thumbs: any;
  slides$ = new BehaviorSubject<string[]>([""]);
  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {}
  

  getSlides() {
    this.slides$.next(
      Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`)
    );
  }

  thumbsSwiper: any;
  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  controlledSwiper: any;
  setControlledSwiper(swiper: any) {
    this.controlledSwiper = swiper;
  }

  indexNumber = 1;
  exampleConfig = { slidesPerView: 3 };
  slidesPerView: number = 4;
  pagination: any = false;

  slides2 = ["slide 1", "slide 2", "slide 3"];
  replaceSlides() {
    this.slides2 = ["foo", "bar"];
  }

  togglePagination() {
    if (!this.pagination) {
      this.pagination = { type: "fraction" };
    } else {
      this.pagination = false;
    }
  }

  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  scrollbar: any = false;
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }
  breakpoints = {
    360: { slidesPerView: 1.5, spaceBetween: 20 },
    640: { slidesPerView: 2.5, spaceBetween: 20 },
    768: { slidesPerView: 3.5, spaceBetween: 10 },
    1024: { slidesPerView: 4.5, spaceBetween: 20 }
  };

  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);
  virtualSlides = Array.from({ length: 60 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  log(log: string) {
    // console.log(string);
  }

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

  slidesEx = ["first", "second"];

  onSlideChange(swiper: any) {
    if (swiper.isEnd) {
      // all swiper events are run outside of ngzone, so use ngzone.run or detectChanges to update the view.
      this.ngZone.run(() => {
        this.slidesEx = [...this.slidesEx, `added ${this.slidesEx.length - 1}`];
      });
      console.log(this.slidesEx);
    }
  }


}
