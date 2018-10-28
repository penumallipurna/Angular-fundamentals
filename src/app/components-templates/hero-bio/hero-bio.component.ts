import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.css'],
  inputs:['hero:name'],
  outputs:['deleteHeroEvent:deleteRequest']
})
export class HeroBioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteHeroEvent=new EventEmitter();
 // @Input('name') hero;
  //@Output('deleteRequest') deleteHeroEvent=new EventEmitter();
  deleteHero(heroObj)
  {
    this.deleteHeroEvent.emit(heroObj);
  }


}
