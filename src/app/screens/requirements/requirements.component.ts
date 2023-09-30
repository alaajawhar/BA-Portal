import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ButtonAction, RowTableTypeEnum, TableRow} from "../../shared/components/table/table.models";
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {BsModalService} from "ngx-bootstrap/modal";
import {RAddModalComponent} from "./r-add-modal/r-add-modal.component";
import {SweetAlertUtils} from "../../shared/utils/SweetAlertUtils";

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  title: string = "Requirements"
  desc: string = "Add, edit and delete your requirements"
  columnHeaders: string[] = ['Name', 'Type', 'Date']
  columnData: TableRow[] = [
    {
      values: [
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Requirement 1'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Feature'
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
        onClick: (index: number) => this.onDelete(index)
      }]
    }]

  mainActionButton: ButtonAction[] = [{
    name: 'Add',
    bootstrapIcon: 'bi bi-trash-fill',
    classes: 'btn-primary',
    style: '',
    onClick: () => this.onAddNew()
  }];


  constructor(private router: Router, private notifications: NotificationsService, private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  onCreateNewItem(myForm: NgForm) {
  }

  onDelete(index: number) {
    SweetAlertUtils.confirmDelete("Delete Action", "Are you sure you want to delete this item", () => {})
  }

  onAddNew() {
    let modalRef = this.modalService.show(RAddModalComponent, {
      animated: false,
    });


    modalRef.content.newItemSubject.subscribe((newItem: any) => {

      this.columnData = [
        ...this.columnData, {
          values: [newItem.name, newItem.type, '2016-05-26'],
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
            onClick: (index: number) => this.onDelete(index)
          }]
        }
      ]

      this.notifications.success(
        "Created",
        `New Requirement has been successfully created`
        , {
          theClass: 'success',
          timeOut: 2000,
          showProgressBar: false
        }
      );
    });

  }


}
