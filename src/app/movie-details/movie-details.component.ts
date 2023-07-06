import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { MoviesDataService } from '../services/movies/movies-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  protected id: number = 0;
  public movie:any;

  constructor(private route: ActivatedRoute, private moviesDataService: MoviesDataService) {}

  ngOnInit(){
    this.id = Number(this.route.snapshot.params['id']);
    this.moviesDataService.listing().subscribe((response) => {
      let movies = Object.values(response);
      let filtered = movies.filter((item: any) => {
        return item.id == this.id;
      });
      
      this.movie = filtered[0];
    });
  }
}
