import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {BsModalService} from "ngx-bootstrap/modal";
import {ButtonAction, TableRow} from "../../../shared/components/table/table.models";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-us-item-details',
  templateUrl: './us-item-details.component.html',
  styleUrls: ['./us-item-details.component.css']
})
export class UsItemDetailsComponent {

  title: string = "Task Item List"
  desc: string = "Task item list related to this use case"
  columnHeaders: string[] = ['#', 'Title', 'Type', 'Date']
  columnData: TableRow[] = [
    {
      values: ['1', 'Create PosUser As actor', 'Task', '2016-05-26'],
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
      values: ['2', 'Delete customer actor', 'Change Request', '2016-05-26'],
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
      values: ['3', 'Cannot change mobile number', 'ISSUE', '2016-05-26'],
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
      values: ['4', 'ISSUE', 'BUG', '2016-05-26'],
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
