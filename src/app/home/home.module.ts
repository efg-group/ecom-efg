import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from "../navbar/navbar.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HomeModule { 
  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (
  //     this.unpauseOnArrow &&
  //     slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
  //       slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
  //   ) {
  //     this.togglePaused();
  //   }f
  //   if (
  //     this.pauseOnIndicator &&
  //     !slideEvent.paused &&
  //     slideEvent.source === NgbSlideEventSource.INDICATOR
  //   ) {
  //     this.togglePaused();
  //   }
  // }

}
