import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private newsService:NewsService) { }
  scienceNewsDisplay:any = [];

  ngOnInit(): void {
    this.newsService.scienceNews().subscribe((result)=>{
      this.scienceNewsDisplay = result.results;
    })
  }

}
