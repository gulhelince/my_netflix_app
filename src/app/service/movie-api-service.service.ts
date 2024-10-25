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

  //trendingmovieapidata
  trendingMovieApiData():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`);
  }

  //Serachmovive
  getSearchMovie(data:any):Observable<any>
  {
    console.log(data,'movie#')
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  //getmoviedatails
  getMovieDetails(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apikey}`)
  }

  //getMovieVideo
  getMovieVideo(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  //getMovieCast
  getMovieCast(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  //action
  fetchActionMovies():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  //adventure
  fetchAdventureMovies():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

   //animation
   fetchAnimationMovies():Observable<any>
   {
     return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
   }

   //comedy
   fetchComedyMovies():Observable<any>
   {
     return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
   }

   //documentary
   fetchDocumentaryMovies():Observable<any>
   {
     return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
   }

    //science-fiction:878
    fetchScienceFictionMovies():Observable<any>
    {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
    }

      //thriller
      fetchThrillerMovies():Observable<any>
      {
        return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
      }

}
