import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "angular2-notifications";
import {ButtonAction, RowTableTypeEnum, TableRow} from "../../shared/components/table/table.models";
import {Router} from "@angular/router";
import {BsModalService} from "ngx-bootstrap/modal";
import {GAddModalComponent} from "./g-add-modal/g-add-modal.component";

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {
  title: string = "Glossaries"
  desc: string = "Add, edit and delete your glossaries"
  columnHeaders: string[] = ['#', 'Name', 'Alias', 'Date']
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
            text: 'Glossary 1'
          }
        },
        {
          type: RowTableTypeEnum.TEXT,
          properties: {
            text: 'G1'
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
        onClick: (index: number) => this.router.navigate(['/glossary-details'])
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
    let modalRef = this.modalService.show(GAddModalComponent, {
      animated: false,
    });


    modalRef.content.newItemSubject.subscribe((newItem: any) => {

      this.columnData = [
        ...this.columnData, {
          values: ['2', newItem.name, newItem.alias, '2016-05-26'],
          actionButtons: [{
            name: 'edit',
            bootstrapIcon: 'bi bi-pencil-fill',
            classes: 'btn-primary',
            style: '',
            onClick: (index: number) => this.router.navigate(['/glossary-details'])
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
        `New Glossary has been successfully created`
        , {
          theClass: 'success',
          timeOut: 2000,
          showProgressBar: false
        }
      );
    });

  }
}
