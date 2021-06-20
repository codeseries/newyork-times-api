import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  constructor(private newsService:NewsService) { }
  artsNewsDisplay:any = [];

  ngOnInit(): void {
    this.newsService.artsNews().subscribe((result)=>{
      this.artsNewsDisplay = result.results;
    })
  }

}
