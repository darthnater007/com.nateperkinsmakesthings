import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Nav } from '../../model/nav'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {    

navItems: Nav[] = [
	new Nav('Home', '/home', 'Go to the home page'),
	new Nav('About', '/about', 'A little more about myself'),
  new Nav('Code', '/code', 'Programming, Web, Games, Etc.'),
	new Nav('Music', '/music', 'Music I wrote, Produced, Recorded, Etc.'),
	new Nav('Writing', '/writing', 'Fiction, Non-Fiction, Poetry, Theater, Film, Etc.'),
	new Nav('Contact', '/contact', 'Need to get a hold of our administrators directly?  Go here!')
];
    
constructor(private router: Router) { }

  ngOnInit() {
  }
}