import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerTitle: string = 'Ministry of Women and Child Development'

  movies: string[] = ['Avengers Endgame', 'Avatar', 'RRR', 'KGF']
  
  movieName: string = ''

  addMovie(): void {
    this.movies.push(this.movieName)
  }



}
