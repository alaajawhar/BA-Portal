import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "angular2-notifications";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ButtonAction, TableRow} from "../../shared/components/table/table.models";
import {BsModalService} from "ngx-bootstrap/modal";
import {DangerDialogComponent} from "../../shared/components/danger-dialog/danger-dialog.component";
import {SfdAddModalComponent} from "./sfd-add-modal/sfd-add-modal.component";

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
      values: ['1', 'Screen Flow Diagram Example 1', '2016-05-26'],
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
    let modalRef = this.modalService.show(DangerDialogComponent, {
      animated: false,
    });

    modalRef.content.isConfirmed.subscribe((isConfirmed: boolean) => {
      if (!isConfirmed) {
        return;
      }

      this.notifications.success(
        "Deleted",
        "Requirement 1 has been deleted successfully"
        , {
          theClass: 'success',
          timeOut: 2000,
          showProgressBar: false
        }
      );
    });
  }

  onAdd() {
    let modalRef = this.modalService.show(SfdAddModalComponent, {
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
