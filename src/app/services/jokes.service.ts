import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Joke } from '../models/joke.interface';

// const httpOptions = {
//   headers: new HttpHeaders({
//     Authorization: '563492ad6f917000010000015dbbb0e1e6fc49228d2ec17267a45e42',
//   }),
// };

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  constructor(private http: HttpClient) {}

  getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(
      'https://official-joke-api.appspot.com/jokes/ten'
    );
  }

  getJokeById(id: String): Observable<Joke> {
    return this.http.get<Joke>('https://picsum.photos/id/' + id + '/info');
  }
}
