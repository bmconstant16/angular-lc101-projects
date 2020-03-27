import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinksTitle = 'My Favorite Links'
  favLinks = ['https://www.reddit.com/r/personalfinance/', 'https://www.nytimes.com/'];
  
  constructor() { }

  ngOnInit() {
  }

}
