import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ButtonAction, RowTableTypeEnum, TableRow} from "../../shared/components/table/table.models";
import {NotificationsService} from "angular2-notifications";
import {BsModalService} from "ngx-bootstrap/modal";
import {AAddModalComponent} from "./a-add-modal/a-add-modal.component";
import {DateUtils} from "../../shared/utils/DateUtils";

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  title: string = "Actors"
  desc: string = "Add, edit and delete your actors"
  columnHeaders: string[] = ['#', 'Name', 'Alias', 'Date']
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
            text: 'Mobile Customer'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'MobCust'
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
        onClick: (index: number) => this.router.navigate(['/actor-details'])
      }, {
        name: 'delete',
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
            text: 'Merchant'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'Merchant'
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
        onClick: (index: number) => this.router.navigate(['/actor-details'])
      }, {
        name: 'delete',
        bootstrapIcon: 'bi bi-trash-fill',
        classes: 'btn-danger',
        style: '',
        onClick: (index: number) => this.onDelete(index)
      }]
    },
  ]

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
    let modalRef = this.modalService.show(AAddModalComponent, {
      animated: false,
    });


    modalRef.content.newItemSubject.subscribe((newItem: any) => {

      this.columnData = [
        ...this.columnData, {
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
                text: newItem.name
              }
            },
            {
              type: RowTableTypeEnum.TEXT,
              properties: {
                text: newItem.alias
              }
            },
            {
              type: RowTableTypeEnum.TEXT,
              properties: {
                text: DateUtils.formatDate(new Date())
              }
            },
          ],
          actionButtons: [{
            name: 'edit',
            bootstrapIcon: 'bi bi-pencil-fill',
            classes: 'btn-primary',
            style: '',
            onClick: (index: number) => this.router.navigate(['/actor-details'])
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
        `New Actor has been successfully created`
        , {
          theClass: 'success',
          timeOut: 2000,
          showProgressBar: false
        }
      );
    });

  }
}
