import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiURI = environment.apiURI;

  constructor(private http: HttpClient) { }

  makeGetRequest(route) {
    return this.http.get<any>(this.apiURI + route)
  }

  makePostRequest(route, requestObj) {
    console.log(this.apiURI + route, requestObj);
    return this.http.post<any>(this.apiURI + route, requestObj);
  }


}
