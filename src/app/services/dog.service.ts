import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = 'https://api.thedogapi.com/v1/images/search';

  constructor(private http: HttpClient) {}

  getRandomDog(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
