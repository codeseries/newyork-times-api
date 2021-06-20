import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtsComponent } from './arts/arts.component';
import { BusinessComponent } from './business/business.component';
import { LoadingComponent } from './loading/loading.component';
import { PoliticsComponent } from './politics/politics.component';
import { ScienceComponent } from './science/science.component';
import { SearchComponent } from './search/search.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { TopstoriesComponent } from './topstories/topstories.component';

const routes: Routes = [
  {
    path:"",
    component:TopstoriesComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"technology",
    component:TechnologyComponent
  },
  {
    path:"business",
    component:BusinessComponent
  },
  {
    path:"science",
    component:ScienceComponent
  },
  {
    path:"arts",
    component:ArtsComponent
  },
  {
    path:"politics",
    component:PoliticsComponent
  },
  {
    path:"sports",
    component:SportsComponent
  },
  {
    path:"loading",
    component:LoadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
