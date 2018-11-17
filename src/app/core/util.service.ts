import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  private userNameSubject: BehaviorSubject<string>=new BehaviorSubject('john Deo');

  userName$:Observable<string> = this.userNameSubject.asObservable();

  updateUserName(username:string)
  {
    this.userNameSubject.next(username);
  }
}
