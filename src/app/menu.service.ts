import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuStatus : boolean = false;
  private menuStatusUpdateEvent = new EventEmitter<boolean>();
  menuStatusObservable = new Observable<boolean> (subscriber => {
    //first value passed without event
    subscriber.next(this.getMenuStatus());

    //passing other values based on event
    const handler = (value:boolean) => {subscriber.next(value)};
    this.menuStatusUpdateEvent.subscribe(handler);
  });

  constructor() { }

  getMenuStatus() : boolean {
    return this.menuStatus;
  }
  toggleMenuStatus() : boolean {
    console.log("toggleMenuStatus called: ", this.menuStatus);
    
    this.menuStatus = !this.menuStatus;
    this.menuStatusUpdateEvent.emit(this.getMenuStatus());
    return this.menuStatus;
  }
}
