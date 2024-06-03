import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProgettiComponent } from './components/progetti/progetti.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { FizzbuzzComponent } from './components/fizzbuzz/fizzbuzz.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "progetti", component: ProgettiComponent, children:[
    {path: "fizzbuzz", component: FizzbuzzComponent}
  ]},
  {path: "curriculum-vitae", component: CurriculumComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
