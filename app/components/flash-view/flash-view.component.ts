import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  selector: 'flash-view',
  templateUrl: require('./app/components/flash-view/flash-view.component.html'),
  styleUrls: [require('./app/components/flash-view/flash-view.component.css')],
  directives: [
    MD_CARD_DIRECTIVES,
    MdIcon
  ],
  providers: [ MdIconRegistry ]
})
export class FlashView {
  @Input('marker-values') flash: Object = {};
  @Output('close-view') closeView = new EventEmitter();

  closeItSelf() {
    this.closeView.emit({});
  }
}
