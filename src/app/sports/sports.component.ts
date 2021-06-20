import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private newsService:NewsService) { }
  sportsNewsDisplay:any = [];

  ngOnInit(): void {
    this.newsService.sportsNews().subscribe((result)=>{
      this.sportsNewsDisplay = result.results;
    })
  }
}
