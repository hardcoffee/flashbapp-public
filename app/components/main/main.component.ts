import {Component} from '@angular/core';

import {MapComponent} from './../map/map.component';

@Component({
  selector: 'my-app',
  template: '<h1>AngularAttack 2016</h1><p>Our project runs!</p><map-app></map-app>',
  directives: [
    MapComponent,
  ]
})
export class MainComponent { }
