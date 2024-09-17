import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { SignalServiceService } from '../../services/signal-service.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.less'
})
export class ContactComponent implements OnInit {

  constructor(private signal: SignalServiceService) { }
  ngOnInit(): void {
    this.signal.setHeader('Contact')
  }
}
