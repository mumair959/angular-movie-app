import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MoviesDataService {

  constructor(private httpService: HttpClient) { }

  movies:any = [];

  listing() {
    return this.httpService.get('/assets/data/movies.json');
  }

}
