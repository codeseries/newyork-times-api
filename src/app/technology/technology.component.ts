import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private newsService:NewsService) { }
  technologyNewsDisplay:any = [];

  ngOnInit(): void {
    this.newsService.technologyNews().subscribe((result)=>{
      this.technologyNewsDisplay = result.results;
    })
  }

}
