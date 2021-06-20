import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";
@Component({
  selector: 'app-topstories',
  templateUrl: './topstories.component.html',
  styleUrls: ['./topstories.component.css']
})
export class TopstoriesComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  topstoriesDisplay:any = [];

  ngOnInit(): void {

    this.newsService.topStories().subscribe((result)=>{
      console.log(result);
      this.topstoriesDisplay = result.results;
    })
  }

}
