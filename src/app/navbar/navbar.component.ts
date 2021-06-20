import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  key: string ="";
  

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
  }

  fetchNews(): void {
    this.newsService.fetchResultsByKey(this.key);
  }
}
