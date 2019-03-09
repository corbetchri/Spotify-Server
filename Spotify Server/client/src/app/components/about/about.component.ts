import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;
  username:string = "???";

  //TODO: inject the Spotify service
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }
  
  spotifyAboutMe(){
	this.spotifyService.aboutMe().then(val => this.name = val.name); 

	console.log(this.spotifyService.aboutMe());
	this.spotifyService.aboutMe().then(val => this.profile_link = val.spotifyProfile);  

	this.spotifyService.aboutMe().then(val => this.profile_pic = val.imageURL);  



	//this.username = this.name;
  }
  
  //this.SpotifyService.profile
  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */

}
