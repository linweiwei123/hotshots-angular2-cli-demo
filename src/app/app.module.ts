import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {MdSliderModule} from "@angular2-material/slider";
import {MdCoreModule,OVERLAY_PROVIDERS,MdUniqueSelectionDispatcher} from "@angular2-material/core";
import {MdButtonModule} from "@angular2-material/button";
import {MdCardModule} from "@angular2-material/card";
import {MdRadioModule} from "@angular2-material/radio";
import {MdCheckboxModule} from "@angular2-material/checkbox";
import {MdTooltipModule} from "@angular2-material/tooltip";
import {MdIconModule,MdIconRegistry} from "@angular2-material/icon";
import 'hammerjs';

const appRoutes:Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home',component: HomeComponent },
  { path:'about', loadChildren: () => new Promise(resolve => {
    (require as any).ensure([], (require: any) => {
      resolve(require('./about/about.module').AboutModule);
    })
  })
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule,
    MdCardModule,
    MdButtonModule,
    MdRadioModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdSliderModule,
    MdIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[OVERLAY_PROVIDERS,MdUniqueSelectionDispatcher,MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mdIconRegister:MdIconRegistry){
    mdIconRegister.registerFontClassAlias('hotshots','ht')
  }
}
