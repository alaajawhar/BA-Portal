import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "angular2-notifications";
import {ButtonAction, RowTableTypeEnum, TableRow} from "../../shared/components/table/table.models";
import {Router} from "@angular/router";
import {BsModalService} from "ngx-bootstrap/modal";
import {SmAddModalComponent} from "./sm-add-modal/sm-add-modal.component";

@Component({
  selector: 'app-screen-mockups',
  templateUrl: './screen-mockups.component.html',
  styleUrls: ['./screen-mockups.component.css']
})
export class ScreenMockupsComponent implements OnInit {
  title: string = "Screen Mockups"
  desc: string = "Add, edit and delete your screen mockups"
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
            text: 'Screen Mockups Example 1'
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
        onClick: (index: number) => this.router.navigate(['/screen-mockup-details'])
      }, {
        name: 'delete',
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
  }

  onAdd() {
    let modalRef = this.modalService.show(SmAddModalComponent, {
      animated: false,
    });


    modalRef.content.newItemSubject.subscribe((newItem: any) => {

      this.columnData = [
        ...this.columnData, {
          values: ['2', newItem.name, '2016-05-26'],
          actionButtons: [{
            name: 'edit',
            bootstrapIcon: 'bi bi-pencil-fill',
            classes: 'btn-primary',
            style: '',
            onClick: (index: number) => this.router.navigate(['/screen-mockup-details'])
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
        `New Screen Mockups has been successfully created`
        , {
          theClass: 'success',
          timeOut: 2000,
          showProgressBar: false
        }
      );
    });

  }

  onText() {
    console.log(this.title)
  }
}
