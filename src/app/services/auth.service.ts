import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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


  currentUserSubject = new BehaviorSubject<string | null>(window.sessionStorage.getItem('username'));

  constructor() { }

  isAuthenticated() : boolean {    
    if(this.currentUserSubject.value)
      return true;
    else
      return false;    
  }

  login(username:string, password:string) : boolean {
    if(this.users.has(username) && this.users.get(username) == password)
    {
      window.sessionStorage.setItem('username', username);
      this.currentUserSubject.next(username);
      return true;
    }
    else
      return false;
  }

  logout() : boolean {
    window.sessionStorage.removeItem('username');
    this.currentUserSubject.next(null);
    return true;
  }
}
