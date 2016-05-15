import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {MapComponent} from './../map/map.component';
import {FlashForm} from './../flash-form/flash-form.component';

@Component({
  selector: 'flash-bapp',
  templateUrl: 'app/components/main/main.component.html',
  styleUrls: ['app/components/main/main.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdIcon,
    MapComponent,
    FlashForm
  ],
  providers: [ MdIconRegistry ]
})
export class MainComponent {
  isOnPlace: boolean = false;
  formShowing: boolean = false;

  setIsOnPlace($event) {
    this.isOnPlace = $event.value;
  }
}
