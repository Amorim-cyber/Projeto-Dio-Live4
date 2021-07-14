import { Error404Component } from './components/error404/error404.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { NavaBarComponent } from "./components/nav-bar/nav-bar.component";

@NgModule({
  declarations:[
    NavaBarComponent,
    Error404Component
  ],
  imports:[
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  exports:[
    NavaBarComponent
  ]
})
export class CoreModule {

}
