import {Component} from '@angular/core';
import {ButtonAction, RowTableTypeEnum, TableRow} from "../../../shared/components/table/table.models";
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {BsModalService} from "ngx-bootstrap/modal";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-uc-items',
  templateUrl: './uc-items.component.html',
  styleUrls: ['./uc-items.component.css']
})
export class UcItemsComponent {

  title: string = "Task Item List"
  desc: string = "Task item list related to this use case"
  columnHeaders: string[] = ['#', 'Title', 'Type', 'Status', 'Date']
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
            text: '03-10-2023'
          }
        },
      ],
      actionButtons: [{
        name: 'edit',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: (index: number) => this.onEdit(index)
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete(index)
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
            text: '03-10-2023'
          }
        },
      ],
      actionButtons: [{
        name: 'edit',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: (index: number) => this.onEdit(index)
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete(index)
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
            text: '03-10-2023'
          }
        },],
      actionButtons: [{
        name: 'edit',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: (index: number) => this.onEdit(index)
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete(index)
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
            text: '03-10-2023'
          }
        }],
      actionButtons: [{
        name: 'edit',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: (index: number) => this.onEdit(index)
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete(index)
      }]
    }]

  mainActionButton: ButtonAction[] = [{
    name: 'Create New Task',
    bootstrapIcon: 'bi bi-trash-fill',
    classes: 'btn-primary',
    style: '',
    onClick: () => this.onCreateNewTask()
  }];

  constructor(private router: Router, private notifications: NotificationsService, private modalService: BsModalService) {
  }

  onCreateNewItem(myForm: NgForm) {
  }

  private onDelete(index: number) {
    console.log("on Delete")
  }

  onEdit(index: number) {
    console.log("on Edit")
  }

  private onCreateNewTask() {
    console.log("create new task")
  }
}
