import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {BsModalService} from "ngx-bootstrap/modal";
import {ButtonAction, RowTableTypeEnum, TableRow} from "../../../shared/components/table/table.models";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-us-item-details',
  templateUrl: './us-item-details.component.html',
  styleUrls: ['./us-item-details.component.css']
})
export class UsItemDetailsComponent {

  title: string = "Task Item List"
  desc: string = "Task item list related to this use case"
  columnHeaders: string[] = ['#', 'Title', 'Type','Status', 'Date']
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
            text: 'Create PosUser As actor',
          }
        },
        {
          type: RowTableTypeEnum.BADGE,
          properties: {
            text: 'Task',
            bootstrapColor: 'primary',
            bootstrapIcon: 'bi-check-circle'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Completed',
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: '2016-05-26'
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
          type: RowTableTypeEnum.BADGE,
          properties: {
            text: 'Change Request',
            bootstrapColor: 'info',
            bootstrapIcon: 'bi-check-circle'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'In Progress',
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: '2016-05-26'
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
            text: 'Cannot change mobile number'
          }
        },
        {
          type: RowTableTypeEnum.BADGE,
          properties: {
            text: 'ISSUE',
            bootstrapColor: 'warning',
            bootstrapIcon: 'bi bi-question-circle'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'On Hold',
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: '2016-05-26'
          }
        },],
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
            text: 'ISSUE'
          }
        },
        {
          type: RowTableTypeEnum.BADGE,
          properties: {
            text: 'BUG',
            bootstrapColor: 'danger',
            bootstrapIcon: 'bi bi-exclamation-octagon'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Completed',
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: '2016-05-26'
          }
        }],
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
