import { Component, OnInit, HostBinding} from '@angular/core';

@Component({
  selector: 'app-styles-demo',
  templateUrl: './styles-demo.component.html',
  styles: ['h1 { font-weight: normal; }', '.users-heading { color: #369;font-size: 30px; }']
})
export class StylesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user = {
    name: 'Human Torch',
    team: ['Mister Fantastic', 'Invisible Woman', 'Thing']
  };

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }


}
