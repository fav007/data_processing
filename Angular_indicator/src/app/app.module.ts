import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicateurListComponent } from './Components/indicateur-list/indicateur-list.component';
import { UploadFileComponent } from './Components/upload-file/upload-file.component';
import { DataServiceService } from './Services/data-service.service';
import { IndicatorService } from './Services/indicator-service.service';

const appRoutes: Routes = [
  { path: '', component: UploadFileComponent },
  { path: 'upload', component: UploadFileComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    IndicateurListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataServiceService, IndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
