import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgModel} from '@angular/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'flash-form',
  template: require('./flash-form.component.html'),
  styles: [require('./flash-form.component.css')],
  directives: [
    NgModel,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdInput,
    MdCheckbox
  ]
})
export class FlashForm {
  @Input('is-on-place') isOnPlace: boolean;
  @Input('created-marker') createdMarker: any;
  @Output('checkbox-changed') checkboxChanged = new EventEmitter();
  @Output('close-form') doCloseForm = new EventEmitter();

  flash: any = {};
  flashes: FirebaseListObservable<any>;

  constructor(af:AngularFire) {
    this.flashes = af.database.list('/flashes');
  }

  checkboxValueUpdated(){
    this.checkboxChanged.emit({
      value: !this.isOnPlace
    });
  }

  closeForm() {
    this.doCloseForm.emit({
      value: false
    })
  }

  submitForm() {
    const position = this.createdMarker && this.createdMarker.position;

    if (position && this.flash.title && this.flash.description && this.flash.date) {
      const promise = this.flashes.push({
        title: this.flash.title,
        description: this.flash.description,
        date: this.flash.date,
        lat: position.lat(),
        lng: position.lng()
      });

      promise
        .then(function(){
          this.flash = {};
          this.closeForm();
        }.bind(this))
        .catch(err => console.log(err, 'Failed to create a flash.'));
    }
  }
}
