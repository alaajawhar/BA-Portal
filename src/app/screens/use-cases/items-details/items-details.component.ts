import {Component} from '@angular/core';
import {ButtonAction, RowTableTypeEnum, TableRow} from "../../../shared/components/table/table.models";
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {BsModalService} from "ngx-bootstrap/modal";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css']
})
/*
*
* DEPRECATED
*
*
* */
export class ItemsDetailsComponent {

  title: string = "Task Item List"
  desc: string = "Task item list related to this use case"
  columnHeaders: string[] = ['#', 'Title', 'Type', '']
  columnData: TableRow[] = [
    {
      values: [
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: '2'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Delete customer actor'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Change Request'
          }
        },
      ],
      actionButtons: [{
        name: 'edit',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: (index: number) => this.router.navigate(['error404'])
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete()
      }]
    },
    {
      values: [
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: '2'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Delete customer actor'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Change Request'
          }
        },
      ],
      actionButtons: [{
        name: 'edit',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: (index: number) => this.router.navigate(['/requirement-details'])
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete()
      }]
    },
    {
      values: [
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: '2'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Delete customer actor'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Change Request'
          }
        },
      ],
      actionButtons: [{
        name: 'edit',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: (index: number) => this.router.navigate(['/requirement-details'])
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete()
      }]
    },
    {
      values: [
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: '2'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Delete customer actor'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Change Request'
          }
        },
      ],
      actionButtons: [{
        name: 'edit',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: (index: number) => this.router.navigate(['/requirement-details'])
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete()
      }]
    }]

  mainActionButton: ButtonAction[] = [{
    name: 'Create New Task',
    bootstrapIcon: 'bi bi-trash-fill',
    classes: 'btn-primary',
    style: '',
    onClick: () => this.onDelete()
  }];

  constructor(private router: Router, private notifications: NotificationsService, private modalService: BsModalService) {
  }

  onCreateNewItem(myForm: NgForm) {
  }

  private onDelete() {
  }
}
