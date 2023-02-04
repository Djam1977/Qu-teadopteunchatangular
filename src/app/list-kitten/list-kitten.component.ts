import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../model/cat.model';
@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
@Input() catsToAdopt: Cat[] = [];



displayBTNAdoptMe = true;

@Output() addCatAdopted: EventEmitter<Cat> = new EventEmitter();

sendToAdoptedList(event: Cat) {
this.addCatAdopted.emit(event);
}
}
