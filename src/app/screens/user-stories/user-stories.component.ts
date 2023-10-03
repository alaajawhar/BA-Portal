import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {ButtonAction, RowTableTypeEnum, TableRow} from "../../shared/components/table/table.models";
import {BsModalService} from "ngx-bootstrap/modal";
import {UsAddModalComponent} from "./us-add-modal/us-add-modal.component";
import {SweetAlertUtils} from "../../shared/utils/SweetAlertUtils";
import {DateUtils} from "../../shared/utils/DateUtils";

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.css']
})
export class UserStoriesComponent implements OnInit {

  title: string = "User Stories"
  desc: string = "Add, edit and delete your user stories"
  columnHeaders: string[] = ['#', 'Name', 'Date']
  columnData: TableRow[] = [
    {
      values: [
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: '1'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Transfer'
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
        onClick: (index: number) => this.router.navigate(['/user-story-details'])
      }, {
        name: 'test',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete(index)
      }]
    }]

  mainActionButton: ButtonAction[] = [
    {
      name: 'Add',
      bootstrapIcon: 'bi bi-trash-fill',
      classes: 'btn-primary',
      style: '',
      onClick: () => this.onAdd()
    }
  ];

  constructor(private router: Router, private notifications: NotificationsService, private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  onDelete(index: number) {
    SweetAlertUtils.confirmDelete("Delete Action", "Are you sure you want this item?", () => {});
  }

  onAdd() {
    let modalRef = this.modalService.show(UsAddModalComponent, {
      animated: false,
    });

    modalRef.content.newItemSubject.subscribe((newItem: any) => {
      this.columnData = [
        ...this.columnData,     {
          values: [
            {
              type: RowTableTypeEnum.TEXT,
              properties: {
                text: '1'
              }
            },
            {
              type: RowTableTypeEnum.TEXT,
              properties: {
                text: newItem.name
              }
            },
            {
              type: RowTableTypeEnum.TEXT,
              properties: {
                text: DateUtils.getCurrentDate()
              }
            }],
          actionButtons: [{
            name: 'edit',
            bootstrapIcon: 'bi bi-pencil-fill',
            classes: 'btn-primary',
            style: '',
            onClick: (index: number) => this.router.navigate(['/user-story-details'])
          }, {
            name: 'test',
            bootstrapIcon: 'bi bi-trash-fill',
            classes: 'btn-danger',
            style: '',
            onClick: (index: number) => this.onDelete(index)
          }]
        }
      ]

      this.notifications.success(
        "Created",
        `New User story has been successfully created`
        , {
          theClass: 'success',
          timeOut: 2000,
          showProgressBar: false
        }
      );
    });

  }
}

