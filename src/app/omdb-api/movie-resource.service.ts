import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieResourceService {

  constructor(protected http: HttpClient) {
  }

  public getMovie(term: string, plot: string = 'short'): Observable<any> {
    const url = `${environment.apiEndpoint}?apikey=${environment.apiKey}`;
    const params: HttpParams = new HttpParams().set('t', term).set('plot', plot);
    return this.http.get<any>(url, {params: params}).pipe(map((response) => {
      return response;
    }));
  }
}
