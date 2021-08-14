import { Injectable } from '@angular/core';
import { Knot } from './knot';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KnotApiService {

  constructor(private http: HttpClient) {};

  readonly ROOT_URL = environment.BACKEND_URL;

  httpOptions: Object = {
    observe: 'response',
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 
  
  getKnots() {
    return this.http.get(this.ROOT_URL+ '/knots', {responseType: 'json'});
  }

  getRandomKnot() {
    return this.http.get<Knot>(this.ROOT_URL+ '/knots/random', {responseType: 'json'})
  }
  
  postKnot(data: Knot) {
    return this.http.post(this.ROOT_URL + '/knots/create', data, this.httpOptions);
  }
}