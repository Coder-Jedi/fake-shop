import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = new Map([
    ['user1', 'pass1'],
    ['user2', 'pass2'],
    ['user3', 'pass3'],
    ['user4', 'pass4'],
  ])


  private currentUser : {username:string, authStatus:boolean} | null = null;

  private userChangeEvent = new EventEmitter();
  userChangeObservable = new Observable<{username:string, authStatus:boolean} | null>(subscriber => {
    //first value w/o event trigger
    subscriber.next(this.currentUser);

    //subsequent values as event trigger response
    const handler = () => {subscriber.next(this.currentUser)};
    this.userChangeEvent.subscribe(handler);
  })

  constructor() { }

  isAuthenticated() : boolean {    
    if(this.currentUser!=null && this.currentUser.authStatus)
      return true;
    else
      return false;    
  }

  login(username:string, password:string) : boolean {
    if(this.users.has(username) && this.users.get(username) == password)
    {
      this.currentUser = {username: username,authStatus: true};
      this.userChangeEvent.emit();
      return true;
    }
    else
      return false;
  }

  logout() : boolean {
    this.currentUser = null;
    this.userChangeEvent.emit();
    return true;
  }
}
