import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
fetchedNewsDisplay:any = [];
keyword:string = "";
  constructor(private newsService:NewsService) { 
    
  }
  
  
  ngOnInit(): void {
    
    this.load();
  }

  load(){
    this.fetchedNewsDisplay = this.newsService.fetchedNewsDisplay
    this.keyword = this.newsService.keyword
  }

}
