import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignalServiceService } from '../../../services/signal-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {

  constructor(private signal: SignalServiceService) {
    effect(() => {
      this.activeMenu = this.signal.header();
    });
  }
  activeMenu = "Home";

  navigation(menu: string) {
    this.activeMenu = menu;
  }

}
