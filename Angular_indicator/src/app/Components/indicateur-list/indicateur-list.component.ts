import { Component, OnDestroy, OnInit } from '@angular/core';
import { Indicateur } from 'src/app/models/Indicateur.model';
import { Subscription } from 'rxjs';
import { IndicatorService } from 'src/app/Services/indicator-service.service';


@Component({
  selector: 'app-indicateur-list',
  templateUrl: './indicateur-list.component.html',
  styleUrls: ['./indicateur-list.component.scss']
})
export class IndicateurListComponent implements OnInit, OnDestroy {
  
  indicateurs: Indicateur[];
  indicateurSubscription: Subscription;

  constructor(private indicateurService: IndicatorService) { }


  ngOnInit() {
      this.indicateurSubscription = this.indicateurService.indicatorSubject.subscribe(
        (indicateurs: Indicateur[]) => {
          this.indicateurs = indicateurs;
        }
      );
      this.indicateurService.emitIndicators();
  }
  
  ngOnDestroy(): void {
    this.indicateurSubscription.unsubscribe();
      
  }
}
