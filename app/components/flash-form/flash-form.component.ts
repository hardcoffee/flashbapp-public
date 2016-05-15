import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgModel} from '@angular/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'flash-form',
  templateUrl: 'app/components/flash-form/flash-form.component.html',
  styleUrls: ['app/components/flash-form/flash-form.component.css'],
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
  @Output('checkbox-changed') checkboxChanged = new EventEmitter();
  @Output('close-form') doCloseForm = new EventEmitter();

  flash: Object = {};
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
    const promise = this.flashes.push(this.flash);

    promise
      .then(function(){
        this.flash = {};
        this.closeForm();
      }.bind(this))
      .catch(err => console.log(err, 'Failed to create a flash.'));
  }
}
