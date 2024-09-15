import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeComponent {

  constructor() {

  }
  slide = [
    "../../../../assets/home/slide/slide.jpg",
    "../../../../assets/home/slide/slide1.jpg",
    "../../../../assets/home/slide/slide2.jpg",
    "../../../../assets/home/slide/slide3.jpg",
    "../../../../assets/home/slide/slide4.jpg",
    "../../../../assets/home/slide/slide5.jpg",
  ]

  society = [
    "../../../../assets/home/society/society1.jpg",
    "../../../../assets/home/society/society2.jpg",
    "../../../../assets/home/society/society3.jpg",
    "../../../../assets/home/society/society4.jpg",
    "../../../../assets/home/society/society5.jpg",
    "../../../../assets/home/society/society6.jpg",
    "../../../../assets/home/society/society7.jpg",
    "../../../../assets/home/society/society8.jpg",
    "../../../../assets/home/society/society9.jpg",
    "../../../../assets/home/society/society10.jpg",
    "../../../../assets/home/society/society11.jpg",
    "../../../../assets/home/society/society12.jpg",
  ]

  bottom = [
    "../../../../assets/home/buttom slide/buttom1.jpg",
    "../../../../assets/home/buttom slide/buttom2.jpg",
    "../../../../assets/home/buttom slide/buttom3.jpg",
    "../../../../assets/home/buttom slide/buttom4.jpg",
    "../../../../assets/home/buttom slide/buttom5.jpg",
  ]
}
