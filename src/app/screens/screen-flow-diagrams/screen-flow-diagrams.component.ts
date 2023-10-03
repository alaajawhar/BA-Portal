import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "angular2-notifications";
import {Router} from "@angular/router";
import {ButtonAction, RowTableTypeEnum, TableRow} from "../../shared/components/table/table.models";
import {BsModalService} from "ngx-bootstrap/modal";
import {SfdAddModalComponent} from "./sfd-add-modal/sfd-add-modal.component";
import {DateUtils} from "../../shared/utils/DateUtils";

@Component({
  selector: 'app-screen-flow-diagrams',
  templateUrl: './screen-flow-diagrams.component.html',
  styleUrls: ['./screen-flow-diagrams.component.css']
})
export class ScreenFlowDiagramsComponent implements OnInit {


  title: string = "Screen Flow Diagrams"
  desc: string = "Add, edit and delete your screen flow diagrams"
  columnHeaders: string[] = ['#', 'Name', 'Date']
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
            text: 'Screen Flow Diagram Example 1'
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
        onClick: (index: number) => this.router.navigate(['/screen-flow-diagram-details'])
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
    let modalRef = this.modalService.show(SfdAddModalComponent, {
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
                text: DateUtils.getCurrentDate()
              }
            },
          ],
          actionButtons: [{
            name: 'edit',
            bootstrapIcon: 'bi bi-pencil-fill',
            classes: 'btn-primary',
            style: '',
            onClick: (index: number) => this.router.navigate(['/screen-flow-diagram-details'])
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
        `New Screen Flow Diagram has been successfully created`
        , {
          theClass: 'success',
          timeOut: 2000,
          showProgressBar: false
        }
      );
    });

  }

}
