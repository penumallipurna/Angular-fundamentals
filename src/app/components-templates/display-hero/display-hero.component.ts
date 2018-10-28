import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-hero',
  templateUrl: './display-hero.component.html',
  styleUrls: ['./display-hero.component.css']
})
export class DisplayHeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero;
  @Output() deleteHeroEvent=new EventEmitter();

  deleteHero(hero)
  {
    this.deleteHeroEvent.emit(hero)
  }

}
