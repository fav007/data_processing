import { Indicateur } from '../models/Indicateur.model';
import { Subject } from 'rxjs';

export class IndicatorService{
    private indicateurs: Indicateur[];
    indicatorSubject = new Subject<Indicateur[]>();

    emitIndicators() {
        this.indicatorSubject.next(this.indicateurs.slice());
    }

    addIndicator(indicators: Indicateur) {
        this.indicateurs.push(indicators);
        this.emitIndicators;
    }
}