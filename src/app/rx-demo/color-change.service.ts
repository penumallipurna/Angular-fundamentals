import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorChangeService {

  private colorsubject=new Subject<string>();

  color$=this.colorsubject.asObservable();
  constructor() { }

  emitColor(color: string){
    this.colorsubject.next(color);
  }
}
