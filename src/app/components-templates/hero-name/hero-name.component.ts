import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-name',
  templateUrl: './hero-name.component.html',
  styleUrls: ['./hero-name.component.css']
})
export class HeroNameComponent implements OnInit {

  private _name: string;

  constructor() { }

  ngOnInit() {
  }

  @Input() set name(name: string) {
    this._name = name.toUpperCase();
  }

  get name() {
    return this._name;
  }
}
