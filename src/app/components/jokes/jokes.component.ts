import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke.interface';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-images',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent implements OnInit {
  jokes: Joke[] = [];
  punchline: string;
  setup: string;

  constructor(private JokesService: JokesService) {}

  ngOnInit(): void {
    this.JokesService.getJokes().subscribe((jokes) => {
      this.jokes = jokes;
      console.log(this.jokes);
    });
  }

  showPunchline(p, s) {
    this.punchline = p;
    this.setup = s;
  }
}
