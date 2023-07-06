import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../services/movies/movies-data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  search = '';
  public movies:any = [];
  public allMovies:any = [];

  constructor(private moviesDataService: MoviesDataService) { 

  }

  searchTextChanges(value: any) {
    this.movies = this.allMovies;
    if (value != '' || value != undefined) {
      let filtered = this.movies.filter((item: any) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });

      this.movies = filtered;
    }
    else{
      this.movies = this.allMovies;
    }
  }

  ngOnInit(): void {
    this.moviesDataService.listing().subscribe((response) => {
      this.movies = response;
      this.allMovies = response;
    });
  }
}
