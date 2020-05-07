import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  _baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  getAll(): Observable<Menu[]> {
    console.log(this._baseUrl);
    return this.http.get<Menu[]>(this._baseUrl + '/menu');
  }

  get(id: number): Observable<Menu> {
    return this.http.get<Menu>(this._baseUrl + '/menu/' + id);
  }
}

interface Menu {
  Id: number;
  Name: string;
  Link: string;
  Icon: string
}
