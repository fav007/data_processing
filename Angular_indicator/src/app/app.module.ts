import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicateurListComponent } from './Components/indicateur-list/indicateur-list.component';
import { IndicatorService } from './Services/indicator-service.service';

@NgModule({
  declarations: [
    AppComponent,
    IndicateurListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [IndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
