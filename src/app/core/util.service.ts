import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable,of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  private userNameSubject: BehaviorSubject<string>=new BehaviorSubject<string>('john Deo');

  userName$:Observable<string> = this.userNameSubject.asObservable();

  updateUserName(username:string)
  {
    this.userNameSubject.next(username);
  }

  checkUniqueUserName(userName: string) {
    let existingUserNames = ['batMan', 'antMan', 'spiderMan', 'superMan'];
    let isExists = existingUserNames.indexOf(userName) > -1 ? true : false;

    return of(isExists).pipe(delay(3000));
}
}
