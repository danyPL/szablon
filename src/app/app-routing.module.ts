import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {
    path:'',
    title:"",
    component: HomeComponent
  },
  {
    path:"list",
    title:"Lista elementów",
    component: ListComponent
  },
  {
    path:"exercise",
    title:"Strona Główna",
    component:ExerciseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
