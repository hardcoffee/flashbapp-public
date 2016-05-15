import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'flash-view',
  templateUrl: 'app/components/flash-view/flash-view.component.html',
  styleUrls: ['app/components/flash-view/flash-view.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdIcon
  ],
  providers: [ MdIconRegistry ]
})
export class FlashView {
  @Input('marker-values') markerValues: Object;
  @Output('close-view') closeView = new EventEmitter();
  
  flashes: FirebaseListObservable<any>;
  
  constructor(af: AngularFire) {
    this.flashes = af.database.list('/flashes');    
  }

  closeItSelf() {
    this.closeView.emit({});
  }
}
