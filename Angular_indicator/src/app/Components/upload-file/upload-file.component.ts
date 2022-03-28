import { Component, OnInit } from '@angular/core';
import { DataModel } from 'src/app/models/DataModel';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  file: any;
  BigData = [];
  constructor() { }

  ngOnInit(): void {
  }

  CheckFile(event: any) {
    const file = event.target.files[0];
    this.file = file;

    if (this.file) {
      this.ReadCSV(this.file);
    }
  }

  //Read file
  ReadCSV(file: any) {
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => {
      const csv = reader.result;
      const dataCsv = (csv as string).split(/\n/);
      let dt = [];
      dataCsv.forEach(d => {
        dt.push(d.split(','))
      });
      console.log(dt[0]);
      //this.header.push(dt[0]);
      for (let j = 1; j <= dt.length; j++) {
        let newData = new DataModel(dt[j][0], dt[j][1], dt[j][2], dt[j][3], dt[j][4], dt[j][5], dt[j][6], dt[j][7], dt[j][8], dt[j][9], dt[j][10].trim());
        console.log(newData);
      }
    }
  }

}
