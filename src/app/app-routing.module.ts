import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'catalogs', component:CourseComponent},
  {path: 'joinnow', component:JoinnowComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
