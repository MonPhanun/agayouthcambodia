import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {

  activeMenu="Home";



  navigation(menu:string){
    this.activeMenu = menu;
  }

}
