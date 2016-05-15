import {Component, NgZone} from '@angular/core';
import {NgClass} from '@angular/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {MapComponent} from './../map/map.component';
import {FlashForm} from './../flash-form/flash-form.component';
import {FlashView} from './../flash-view/flash-view.component';

@Component({
  selector: 'flash-bapp',
  templateUrl: 'app/components/main/main.component.html',
  styleUrls: ['app/components/main/main.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdIcon,
    MapComponent,
    FlashForm,
    FlashView
  ],
  providers: [ MdIconRegistry ]
})
export class MainComponent {
  isOnPlace: boolean = false;
  formShowing: boolean = false;
  isFlashViewOpen: boolean = false;
  isFlashViewAlive: boolean = false;
  selectedMarker: Object;

  constructor(private _ngZone: NgZone) {}

  updateIsOnPlaceFromInput(event) {
    this.isOnPlace = event.value;
  }

  updateIsOnPlaceFromMap(event) {
    this.isOnPlace = event.externally;
  }
  
  closeForm(event) {
    this.formShowing = event.value;
  }

  openFlashView(event) {
    this._ngZone.run(function() {
      this.selectedMarker = event.marker;
      this.isFlashViewOpen = this.isFlashViewAlive = true;
    }.bind(this));
  }
}
