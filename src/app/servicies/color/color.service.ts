import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  configUrl = 'https://www.colr.org/json/colors/random/';
  
  constructor(private http: HttpClient) { }

  getColor() {
    let numberOfColors = Math.floor(Math.random() * (8 - 1) + 8);
    return this.http.get(this.configUrl + numberOfColors);
  }
}
