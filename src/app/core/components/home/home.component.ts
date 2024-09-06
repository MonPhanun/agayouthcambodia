import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class HomeComponent{

  slide = [
    "../../../../assets/home/slide/slide.jpg",
    "../../../../assets/home/slide/slide1.jpg",
    "../../../../assets/home/slide/slide2.jpg",
    "../../../../assets/home/slide/slide3.jpg",
    "../../../../assets/home/slide/slide4.jpg",
    "../../../../assets/home/slide/slide5.jpg",
  ]
}
