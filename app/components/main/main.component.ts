import {Component} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';

import {MapComponent} from './../map/map.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/main/main.component.html',
  styleUrls: ['app/components/main/main.component.css'],
  directives: [
    MdToolbar,
    MapComponent
  ]
})
export class MainComponent { }
