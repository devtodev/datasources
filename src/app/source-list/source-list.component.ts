import { Component } from '@angular/core';

import * as datasources from '../../assets/datasources.json';
import * as sensorData from '../../assets/data.json';

export interface TableRow {
  timestamp: string;
  value: number;
  type: string;
}

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css'],
})
export class SourceListComponent {
  sources: any = (datasources as any).default;
  data: any = (sensorData as any).default;

  displayedColumns: string[] = ['timestamp', 'value', 'type'];
  dataSource: TableRow[] = [];

  onSelected(selected: string) {
    let result = Array<TableRow>();

    for (let element in sensorData) {
      let entity = sensorData[element]?.datasource?.entity?.id?.id;
      if ((entity != undefined) && (sensorData[element].datasource.entity.id.id == selected)) {
        for (let index in sensorData[element].data)
        {
          let myDate = new Date(sensorData[element].data[index][0]);
          let dateStr = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate() + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

          result.push({timestamp: dateStr, value: sensorData[element].data[index][1], type: sensorData[element].dataKey.name});
        }
      }
    }
    //datatable.datasource = result;
    result.sort((a,b) => (a.timestamp > b.timestamp) ? 1 : ((b.timestamp > a.timestamp) ? -1 : 0))
    this.dataSource =  result;
  }
}
