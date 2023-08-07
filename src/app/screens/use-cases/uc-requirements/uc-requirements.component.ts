import { Component, OnInit } from '@angular/core';
import {ButtonAction, TableRow} from "../../../shared/components/table/table.models";
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {BsModalService} from "ngx-bootstrap/modal";
import {NgForm} from "@angular/forms";
import {RAddModalComponent} from "../../requirements/r-add-modal/r-add-modal.component";

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
    onClick: () => this.link()
  }];

  constructor(private router: Router, private notifications: NotificationsService, private modalService: BsModalService) {
  }

  link() {
    let modalRef = this.modalService.show(RAddModalComponent, {
      animated: false,
    });

    modalRef.content.newItemSubject.subscribe((newItem: any) => {

      this.notifications.success(
        "Created",
        `New Requirement has been successfully Linked`
        , {
          theClass: 'success',
          timeOut: 2000,
          showProgressBar: false
        }
      );
    });
  }

  private onDelete() {
  }
}
