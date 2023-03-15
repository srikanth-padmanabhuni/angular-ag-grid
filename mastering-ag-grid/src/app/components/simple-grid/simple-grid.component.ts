import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef } from 'ag-grid-community';

import { simpleGrid } from "./../../static-data/mock-data";

@Component({
  selector: 'app-simple-grid',
  templateUrl: './simple-grid.component.html',
  styleUrls: ['./simple-grid.component.scss']
})
export class SimpleGridComponent implements OnInit {


  columnDefs: any = simpleGrid.columnDefs as (ColDef<any>[] | ColGroupDef<any>[]);
  rowData: any = simpleGrid.rowData;

  constructor() {}

  ngOnInit(): void { 
  }
}
