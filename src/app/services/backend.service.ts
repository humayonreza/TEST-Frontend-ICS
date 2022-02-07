import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resp } from './interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  basePath: string = 'https://ics-hiring-app.azurewebsites.net/api/horses';
  constructor(private http: HttpClient) {}

  fetchHorseData(): Observable<Resp[]> {
    return this.http.get<Resp[]>(this.basePath);
  }

  fetch_performence(data: any): Observable<Resp[]> {
    let endPoint =
      'https://ics-hiring-app.azurewebsites.net/api/horses/' +
      data.id +
      '?secondselapsed=' +
      data.secondselapsed;
    return this.http.get<Resp[]>(endPoint);
  }
  //
}
