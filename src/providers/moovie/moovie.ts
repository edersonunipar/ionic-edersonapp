import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
 private  baseApiPath = "https://api.themoviedb.org/3/movie/popular?api_key=d6cdc0fe10237dd6d2d55ea4005626dc";
 //public chave = "d6cdc0fe10237dd6d2d55ea4005626dc";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

getLatesMovies(){
   return this.http.get(this.baseApiPath);
}



}
