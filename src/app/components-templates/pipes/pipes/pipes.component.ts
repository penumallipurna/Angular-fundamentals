import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  birthday = new Date(1988, 3, 15);

  constructor() { }

  ngOnInit() {
    console.log(this.birthday);
  }

  name: string = 'Keith C John';
  
  heroes = [
    {name: 'Windstorm', canFly: true},
    {name: 'Bombasto',  canFly: false},
    {name: 'Magneto',   canFly: false},
    {name: 'Tornado',   canFly: true}
  ];

  newHero = {
    name: '',
    canFly: true
  };

  pushHero(name, canFly) {
    let heroObj = {
      name: name,
      canFly: canFly
    };
    // Here heroes array reference is not changed. Pushed another element to same array.
    // So, Pure pipe don't detect this change 
    this.heroes.push(heroObj);
    this.newHero.name = '';
  }
  
  concatHero(name, canFly) {
    let heroObj = {
      name: name,
      canFly: canFly
    };
    // Here we are changing the reference of the heroes array on concat
    // Pure pipe will respond to this change
    this.heroes = this.heroes.concat(heroObj);
    this.newHero.name = '';
  }
  
}
