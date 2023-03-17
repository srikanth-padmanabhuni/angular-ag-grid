import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef, DomLayoutType, GridApi, RowClassRules, RowValueChangedEvent } from 'ag-grid-community';
import { simpleGrid } from 'src/app/static-data/mock-data';
import { ButtonRendereComponent } from '../button-rendere/button-rendere.component';

@Component({
  selector: 'app-crud-grid',
  templateUrl: './crud-grid.component.html',
  styleUrls: ['./crud-grid.component.scss']
})
export class CrudGridComponent implements OnInit {

  private api: GridApi;

  columnDefs: any = simpleGrid.columnDefs as (ColDef<any>[] | ColGroupDef<any>[]);
  rowData: any = simpleGrid.rowData;
  frameworkComponents: any;

  public domLayout: DomLayoutType = 'autoHeight';

  constructor() { 
    this.frameworkComponents = {
      buttonRenderer: ButtonRendereComponent,
    }
  }

  ngOnInit(): void {
    this.columnDefs.push(
      // {
      //   headerName: 'Edit',
      //   cellRenderer: 'buttonRenderer',
      //   cellRendererParams: {
      //     onClick: this.onEditButtonClick.bind(this),
      //     label: 'Edit'
      //   },
      //   editable: false
      // },
      {
        headerName: 'Delete',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onDeleteButtonClick.bind(this),
          label: 'Delete'
        },
        editable: false
      }
      // {
      //   headerName: 'Save',
      //   cellRenderer: 'buttonRenderer',
      //   cellRendererParams: {
      //     onClick: this.onSaveButtonClick.bind(this),
      //     label: 'Save'
      //   },
      //   editable: false
      // }
    )
  }

  onGridReady(params): void {
    this.api = params.api;
    this.api.sizeColumnsToFit();
  }

  onRowValueChanged(params: RowValueChangedEvent) {
    console.log(this.rowData);
  }

  insertNewRow() {
    const updates = this.api.applyTransaction(
      {
          add: [{
              id: this.rowData.length + 1, make: "---", model: "---", price: 0
          }]
      }
    );

    this.api.startEditingCell({
        rowIndex: updates.add[0].rowIndex,
        colKey: 'make'
    });
  }

  onEditButtonClick(params)
  {
    this.api.startEditingCell({
      rowIndex: params.node.rowIndex,
      colKey: 'make'
    });
  }

  onSaveButtonClick(params) {
    this.rowData.push(params.data)
    this.api.stopEditing();
  }

  onDeleteButtonClick(params)
  {
    this.api.applyTransaction({remove: [params.data]});
  }

  exportToExcel() {
    this.api.exportDataAsExcel();
  }
}
