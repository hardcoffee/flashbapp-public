import {Component} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';

import {MapComponent} from './../map/map.component';
import {FlashForm} from './../flash-form/flash-form.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/main/main.component.html',
  styleUrls: ['app/components/main/main.component.css'],
  directives: [
    MdToolbar,
    MapComponent,
    FlashForm
  ]
})
export class MainComponent { }
