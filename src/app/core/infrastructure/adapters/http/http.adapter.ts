import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpAdapter {
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: any): Observable<T> {
    return this.http.get<T>(`${environment.URL_BACKEND_SP}${endpoint}`, { params });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${environment.URL_BACKEND_SP}${endpoint}`, body);
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${environment.URL_BACKEND_SP}${endpoint}`, body);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${environment.URL_BACKEND_SP}${endpoint}`);
  }
}