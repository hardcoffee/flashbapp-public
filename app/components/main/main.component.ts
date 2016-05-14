import {Component} from '@angular/core';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';

import {MapComponent} from './../map/map.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/main/main.component.html',
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MdToolbar,
    MapComponent
  ]
})
export class MainComponent { }
