import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { CodeComponent } from './core/code/code.component';
import { MusicComponent } from './core/music/music.component';
import { WritingComponent } from './core/writing/writing.component';
import { ContactComponent } from './core/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'code', component: CodeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'contact', component: ContactComponent },
  { path:'**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
