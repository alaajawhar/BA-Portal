import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {ButtonAction, TableRow} from "../../shared/table/table.models";
import {BsModalService} from "ngx-bootstrap/modal";
import {DangerDialogComponent} from "../../shared/danger-dialog/danger-dialog.component";

@Component({
  selector: 'app-use-case-diagram',
  templateUrl: './use-case-diagram.component.html',
  styleUrls: ['./use-case-diagram.component.css'],
})
export class UseCaseDiagramComponent implements OnInit {

  title: string = "Use Case Diagram"
  desc: string = "Add, edit and delete your use case diagram"
  columnHeaders: string[] = ['#', 'Name', 'Date']
  columnData: TableRow[] = [
    {
      values: ['1', 'Top Up', '2023-05-26'],
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
      onClick: () => console.log('onAdd')
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

  onCreateNewItem(myForm: NgForm) {

  }
}
