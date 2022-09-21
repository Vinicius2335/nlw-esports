import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericEmiterService {

  private static emitter: {
    [nameEvent: string]: EventEmitter<any>;
  } = { };

constructor() { }

static get (nameEvent: string): EventEmitter<any> {
  if (!this.emitter[nameEvent]){
    this.emitter[nameEvent] = new EventEmitter<any>();
  }

  return this.emitter[nameEvent];
}

}
