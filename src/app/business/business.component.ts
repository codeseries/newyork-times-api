import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private newsService:NewsService) { }
  businessNewsDisplay:any = [];

  ngOnInit(): void {
    this.newsService.businessNews().subscribe((result)=>{
      this.businessNewsDisplay = result.results;
    })
  }

}
