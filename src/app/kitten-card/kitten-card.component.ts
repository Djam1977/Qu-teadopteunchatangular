import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../model/cat.model';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrls: ['./kitten-card.component.css']
})
export class KittenCardComponent {


  @Input() cat!: Cat;
  @Input() displayBtnAdoptMeCat = false;

  @Output() sendToAdoptedList: EventEmitter<Cat> = new EventEmitter();
  addCatToAdoptedList() {
this.sendToAdoptedList.emit(this.cat);
  }
}
