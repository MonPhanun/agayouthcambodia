import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalServiceService {

  constructor() { }

  header = signal('');

  setHeader(val: string) {
    this.header.set(val);
  }
}
