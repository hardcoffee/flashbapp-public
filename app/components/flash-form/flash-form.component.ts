import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgModel} from '@angular/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {AngularFire} from 'angularfire2';

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
  
  constructor(public af:AngularFire) {
    console.log(this.af);
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
}
