import { Component, Input } from '@angular/core';
import { Cat } from '../model/cat.model';
@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {
@Input() adoptedCats: Cat[] = [];
}
