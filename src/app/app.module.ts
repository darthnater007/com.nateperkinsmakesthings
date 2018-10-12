import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { CodeComponent } from './core/code/code.component';
import { MusicComponent } from './core/music/music.component';
import { WritingComponent } from './core/writing/writing.component';
import { ContactComponent } from './core/contact/contact.component';
import { NavComponent } from './core/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CodeComponent,
    MusicComponent,
    WritingComponent,
    ContactComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
