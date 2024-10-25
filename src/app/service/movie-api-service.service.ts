import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";

  apikey = "592be103b27975e8e31c37d547c11683";

  //bannerapidata

  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apikey}`);
  }
}
