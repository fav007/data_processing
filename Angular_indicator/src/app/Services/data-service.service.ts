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
}
