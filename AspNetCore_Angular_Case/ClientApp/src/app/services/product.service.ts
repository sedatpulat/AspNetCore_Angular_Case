import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this._baseUrl + '/Product');
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(this._baseUrl + '/Product/' + id);
  }
}

interface Product {
  Id: number;
  Name: string;
  Description: string;
  Price: number;
  Image: string;

}
