import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgModel} from '@angular/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';

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
  ],
  outputs: ['myevent']
})
export class FlashForm {
  @Input('is-on-place') isOnPlace: boolean;  
  @Output('change') myevent = new EventEmitter(); 
  
  lunchEvent(){
    this.myevent.emit({ value: !this.isOnPlace });
  }
}
