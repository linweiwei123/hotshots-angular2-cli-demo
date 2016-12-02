import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'',component:AboutComponent}
    ])
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
