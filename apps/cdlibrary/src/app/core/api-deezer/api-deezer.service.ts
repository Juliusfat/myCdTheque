import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDeezerService {

  constructor(private http: HttpClient) { }

  public getDeezerAlbum(title: string) {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin','*');

    const filter = '?q='
    return this.http.get(`${environment.api_deezer}${filter}${title}`, {headers});
  }
}
