import {Component, OnInit} from '@angular/core';
import {ButtonAction, TableRow} from "../../../shared/table/table.models";

@Component({
  selector: 'app-screen-mockup-details',
  templateUrl: './screen-mockup-details.component.html',
  styleUrls: ['./screen-mockup-details.component.css']
})
export class ScreenMockupDetailsComponent implements OnInit {

  title: string = "Screen Mockup List"
  desc: string = "Add, edit and delete your mockups"
  columnHeaders: string[] = ['header1', 'header2', 'header3', 'header4',]
  columnData: TableRow[] = [
    {
      values: ['data1', 'data2', 'data3', 'data4'],
      actionButtons: [{
        name: 'test',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: () => console.log('onEdit')
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: () => console.log('onDelete')
      }]
    }]
  mainActionButton: ButtonAction[] = [
    {
      name: 'test',
      bootstrapIcon: 'bi bi-trash-fill',
      classes: 'btn-primary',
      style: '',
      onClick: () => console.log('onAdd')
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
