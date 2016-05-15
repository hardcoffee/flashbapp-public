import {Component, Input} from '@angular/core';
import {NgModel} from '@angular/common';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';

@Component({
  selector: 'flash-view',
  templateUrl: 'app/components/flash-view/flash-view.component.html',
  directives: [
    NgModel,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdInput,
    MdCheckbox
  ]
})
export class FlashView {
  @Input('flash-id') flashId: number; 
  
}
