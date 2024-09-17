import { Component, OnDestroy, OnInit } from '@angular/core';
import { SignalServiceService } from '../../services/signal-service.service';

@Component({
  selector: 'app-worshipband',
  standalone: true,
  imports: [],
  templateUrl: './worshipband.component.html',
  styleUrl: './worshipband.component.less'
})
export class WorshipbandComponent implements OnInit {

  constructor(private signal: SignalServiceService) { }
  ngOnInit(): void {
    this.signal.setHeader('Worship Band')
  }
}
