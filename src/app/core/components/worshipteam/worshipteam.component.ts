import { Component, OnInit } from '@angular/core';
import { SignalServiceService } from '../../services/signal-service.service';

@Component({
  selector: 'app-worshipteam',
  standalone: true,
  imports: [],
  templateUrl: './worshipteam.component.html',
  styleUrl: './worshipteam.component.less'
})
export class WorshipteamComponent implements OnInit {

  constructor(private signal: SignalServiceService) { }
  ngOnInit(): void {
    this.signal.setHeader('Worship')
  }

  contain = [
    "../../../../assets/worship/content/content1.jpg",
    "../../../../assets/worship/content/content2.jpg",
    "../../../../assets/worship/content/content3.jpg",
    "../../../../assets/worship/content/content4.jpg",
    "../../../../assets/worship/content/content5.jpg",
    "../../../../assets/worship/content/content6.jpg",
    "../../../../assets/worship/content/content7.jpg",
    "../../../../assets/worship/content/content8.jpg",
    "../../../../assets/worship/content/content9.jpg",
    "../../../../assets/worship/content/content10.jpg",
  ]


}
