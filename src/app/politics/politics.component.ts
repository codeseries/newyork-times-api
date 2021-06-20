import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  constructor(private newsService:NewsService) { }
  politicsNewsDisplay:any = [];

  ngOnInit(): void {
    this.newsService.politicsNews().subscribe((result)=>{
      this.politicsNewsDisplay = result.results;
    })
  }

}
