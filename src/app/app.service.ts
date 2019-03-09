import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private api_key= "4e42d02e72f21f6b9b76761c57ade7d2";

  constructor(private http:HttpClient) { }
  getPopluarMovie(){
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key="+this.api_key+"&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1").pipe(map(res => res));
  }

  getUpcomingMovie(){
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key="+this.api_key+"&language=en-US&page=1&include_adult=true")
    .pipe(map(res =>res));
  }

    getSearched(str: string){
        return this.http.get("https://api.themoviedb.org/3/search/multi?api_key="+this.api_key+"&language=en-US&query="+str+"&page=1&include_adult=true")
        .pipe(map(res => res));
    }

}
