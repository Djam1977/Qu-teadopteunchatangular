import { Component } from '@angular/core';
import { catsToAdopt } from './data/cats';
import { Cat } from './model/cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  catsToAdoptList: Cat[] = catsToAdopt;

  catsAdopted: Cat[] = [
    {
      race: 'Russell',
      name: 'hasbulla',
      birth: new Date(),
      imgCat:
        'https://www.themoviedb.org/t/p/original/oa2gIzDwZ5weyZea5iXPLrQ7leN.jpg',
    },
  ];

  addNewCat(event: Cat) {
    this.catsToAdoptList.push(event);
  }
  receiveCatToAdopt(event: Cat) {
    this.catsAdopted.push(event);
    this.catsToAdoptList.splice(this.catsToAdoptList.indexOf(event), 1);
  }
}
