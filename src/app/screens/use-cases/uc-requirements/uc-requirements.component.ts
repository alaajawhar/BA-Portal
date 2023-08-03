import { Component, OnInit } from '@angular/core';
import {ButtonAction, TableRow} from "../../../shared/components/table/table.models";
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {BsModalService} from "ngx-bootstrap/modal";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-uc-requirements',
  templateUrl: './uc-requirements.component.html',
  styleUrls: ['./uc-requirements.component.css']
})
export class UcRequirementsComponent {

  title: string = "Requirements"
  desc: string = "Link you use case to an existing requirements"
  columnHeaders: string[] = ['Name', 'Type', 'Date']
  columnData: TableRow[] = [
    {
      values: ['Requirement 1', 'Feature', '2016-05-26'],
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
    name: 'Link',
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
