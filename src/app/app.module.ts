import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { FormsModule } from '@angular/forms';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { KittenCardComponent } from './kitten-card/kitten-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ListKittenComponent,
    CreateKittenComponent,
    UserKittenComponent,
    KittenCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
