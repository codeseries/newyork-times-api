import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient,private route:Router) { }

  newsApiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EeOiAhtiooZG2JgOmsuvFSFjV88dEwmx`;
  politicsNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=EeOiAhtiooZG2JgOmsuvFSFjV88dEwmx`;
  scienceNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=EeOiAhtiooZG2JgOmsuvFSFjV88dEwmx`;
  businessNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=EeOiAhtiooZG2JgOmsuvFSFjV88dEwmx`;
  technologyNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=EeOiAhtiooZG2JgOmsuvFSFjV88dEwmx`;
  artsNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=EeOiAhtiooZG2JgOmsuvFSFjV88dEwmx`;
  sportsNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=EeOiAhtiooZG2JgOmsuvFSFjV88dEwmx`;
  fetchNewsApiUrl = "";
  intFetchedData:Observable<any> | undefined
  fetchedNewsDisplay:any = [];
  keyword:string = "";

  topStories():Observable<any>
  {
    return this.httpClient.get(this.newsApiUrl)
  }
  politicsNews():Observable<any>
  {
    return this.httpClient.get(this.politicsNewsApiUrl)
  }
  scienceNews():Observable<any>
  {
    return this.httpClient.get(this.scienceNewsApiUrl)
  }
  businessNews():Observable<any>
  {
    return this.httpClient.get(this.businessNewsApiUrl)
  }
  artsNews():Observable<any>
  {
    return this.httpClient.get(this.artsNewsApiUrl)
  }
  technologyNews():Observable<any>
  {
    return this.httpClient.get(this.technologyNewsApiUrl)
  }
  sportsNews():Observable<any>
  {
    return this.httpClient.get(this.sportsNewsApiUrl)
  }

  fetchResultsByKey(key:any): void{
    this.route.navigate(["loading"])
    this.keyword = key;
    console.log(key);
    this.fetchNewsApiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${key}&api-key=EeOiAhtiooZG2JgOmsuvFSFjV88dEwmx`;
    this.intFetchedData = this.httpClient.get(this.fetchNewsApiUrl);
    this.intFetchedData.subscribe((result)=>{
      console.log(result);
      this.fetchedNewsDisplay = result.response.docs;
      console.log(this.fetchedNewsDisplay);
      this.route.navigate(["search"])
    })
  }
}
