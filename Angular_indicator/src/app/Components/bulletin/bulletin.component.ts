import { Component, OnInit } from '@angular/core';
import { DataModel } from 'src/app/models/DataModel';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {

  BigData: any[];
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (value: DataModel[]) => {
        this.BigData.push(value)
      }
    )
    this.dataService.emitData();
    this.D1();
  }

  D1() {
    console.log(this.BigData['fin_traitement']);
  }

}
