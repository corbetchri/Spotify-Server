import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];
  notTrack: boolean = true;

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search() {

	this.spotifyService.searchFor(this.searchCategory, this.searchString).then((data) => 
	{ this.resources = data; console.log(data)});

	if (this.searchCategory == "track"){
		this.notTrack = false;
	}
	else {
		this.notTrack = true;
	}
	//this.resources = this.spotifyService.searchFor(this.searchCategory, this.searchString).then((data) => { this.resources = data});

	//console.log(this.resources);
    //TODO: call search function in spotifyService and parse response
  }

  textChanged(inputValue){
	this.searchString = String(inputValue);
	//console.log(this.searchString);
  }

  selectChanged(text2){
	this.searchCategory = text2;
  }

}
