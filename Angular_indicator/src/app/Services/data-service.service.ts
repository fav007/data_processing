import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataModel } from '../models/DataModel';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private Data: DataModel[] = [];
  private DataSubject = new Subject<DataModel[]>();
  constructor() { }

  emitData() {
    this.DataSubject.next(this.Data.slice());
  }
  addData(newData: DataModel) {
    this.Data.push(newData);
    this.emitData();
  }
  getData() {
    return this.DataSubject
  }

  getDelay(date1, date2) {
    var diff = {
      'day': 0,
      'hour': 0,
      'min': 0,
      'sec': 0
    }                           // Initialisation du retour
    var tmp = date2 - date1;

    tmp = Math.floor(tmp / 1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;                    // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60);    // Nombre de minutes (partie entière)
    diff.min = tmp % 60;                    // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60);    // Nombre d'heures (entières)
    diff.hour = tmp % 24;                   // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24);   // Nombre de jours restants
    diff.day = tmp;

    return diff;
  }
}
