import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  color: string = 'green';

  currentHero = {
    name: "John"
  };

  nullHero = null;  

  heroes = [{"id":1,"name":"Vyky","power":2612},
  {"id":2,"name":"Vernice","power":7036},
  {"id":3,"name":"Chrissie","power":3331},
  {"id":4,"name":"Tana","power":5158},
  {"id":5,"name":"Rawley","power":8948}];

  differentHeroNames = [{"id":1,"name":"Ram","power":2612},
  {"id":2,"name":"Laxman","power":7036},
  {"id":3,"name":"Barath","power":3331},
  {"id":4,"name":"Shatrughna","power":5158},
  {"id":5,"name":"Hanuman","power":8948}];

  differentHeroIds = [{"id":11,"name":"Ram","power":2612},
  {"id":12,"name":"Laxman","power":7036},
  {"id":13,"name":"Barath","power":3331},
  {"id":14,"name":"Shatrughna","power":5158},
  {"id":15,"name":"Hanuman","power":8948}];

  trackByHeroes(index: number, hero): number { 
    return hero.id; 
  }

  updateWihDifferentNames() {
    this.heroes = this.differentHeroNames;
  }

  updateWithDifferentIds() {
    this.heroes = this.differentHeroIds;
  }

  condition = false;

}
