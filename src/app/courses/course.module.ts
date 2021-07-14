import { AppPipeModule } from './../shared/pipes/app-pipe.module';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/components/star/star.module';

@NgModule({
  declarations:[
    CourseListComponent,
    CourseInfoComponent,
  ],
  imports:[
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'course/info/:id', component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule {

}
