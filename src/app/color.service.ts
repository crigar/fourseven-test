import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  configUrl = 'https://www.colr.org/json/color/random';

  constructor(private http: HttpClient) { }

  getColor() {
    return this.http.get<any>(this.configUrl);
  }
}
