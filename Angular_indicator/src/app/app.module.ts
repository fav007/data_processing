import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { IndicateurListComponent } from './Components/indicateur-list/indicateur-list.component';
import { IndicatorService } from './Services/indicator-service.service';
=======
import { UploadFileComponent } from './Components/upload-file/upload-file.component';
import { DataServiceService } from './Services/data-service.service';
import { BulletinComponent } from './Components/bulletin/bulletin.component';

const appRoutes: Routes = [
  {
    path: '', component: UploadFileComponent
  },
  {
    path: 'upload', component: UploadFileComponent
  }
]
>>>>>>> 57af75782e81dc9e8c16420b72ab7ba13d1ce845

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UploadFileComponent,
    BulletinComponent
=======
<<<<<<< HEAD
    IndicateurListComponent
=======
    UploadFileComponent
>>>>>>> 57af75782e81dc9e8c16420b72ab7ba13d1ce845
>>>>>>> b57dab754647277dd746826e90742d6bd5573bd7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
<<<<<<< HEAD
  providers: [IndicatorService],
=======
  providers: [DataServiceService],
>>>>>>> 57af75782e81dc9e8c16420b72ab7ba13d1ce845
  bootstrap: [AppComponent]
})
export class AppModule { }
