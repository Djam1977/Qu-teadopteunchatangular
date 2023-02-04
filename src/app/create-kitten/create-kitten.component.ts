import { Component, Output, EventEmitter } from '@angular/core';
import { Cat } from '../model/cat.model';
@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent {
  newCat: Cat = {
    name: '',
    race: '',
    birth: new Date(),
    imgCat: 'http://placeKitten.com/200/200',
  };
  @Output() sendNewCatToParent: EventEmitter<Cat> = new EventEmitter();

  createNewCat() {
    this.sendNewCatToParent.emit(this.newCat);
    this.newCat = {
      name: '',
      race: '',
      birth: new Date(),
      imgCat: 'http://placeKitten.com/200/200',
    };
  }
}
