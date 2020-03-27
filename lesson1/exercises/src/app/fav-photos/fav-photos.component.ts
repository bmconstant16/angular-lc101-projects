import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-cat-photos-funny-cover.jpg';
  image3 = 'https://i.pinimg.com/originals/34/1d/23/341d239c291e638a588e65773e0662be.jpg';
  image4 = 'https://media.giphy.com/media/13HBDT4QSTpveU/giphy.gif'

  constructor() { }

  ngOnInit() {
  }

}