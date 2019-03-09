import { Component ,OnInit, Input} from '@angular/core';
import { AppService } from './app.service';
// import { Subscription } from 'rxjs';
import { Response } from '@angular/http';

//  import 'rxjs/Rx';
//  import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'musizz';
  trendingmovies: any;
  upcoming: any;
  searching: any;
  searchStr: string;
      constructor(private movie:AppService){}

        ngOnInit(){
          this.movie.getPopluarMovie().subscribe(
            (data: Response) => {this.trendingmovies=data["results"]
            // console.log(this.trendingmovies);
            }
          );
          this.movie.getUpcomingMovie().subscribe(
            (data: Response) => {
              this.upcoming=data["results"]
              //console.log(data);
            }
          );
        }

        Search(){
          this.movie.getSearched(this.searchStr).subscribe(
            (data: Response)=> {
              this.searching=data["results"]
              console.log(data);
            }
          );
          console.log(this.searchStr);
        }
       
}
