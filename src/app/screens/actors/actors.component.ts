import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ButtonAction, TableRow} from "../../shared/table/table.models";
import {NotificationsService} from "angular2-notifications";
import {DangerDialogComponent} from "../../shared/danger-dialog/danger-dialog.component";
import {BsModalService} from "ngx-bootstrap/modal";

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
      values: ['1', 'Mobile Customer', 'MobCust', '2020-11-02'],
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
      values: ['2', 'Merchant', 'Merchant', '2016-05-26'],
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
