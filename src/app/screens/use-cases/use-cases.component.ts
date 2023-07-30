import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {ButtonAction, TableRow} from "../../shared/table/table.models";

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.css']
})
export class UseCasesComponent implements OnInit {

  title: string = "Use Cases"
  desc: string = "Add, edit and delete your use cases"
  columnHeaders: string[] = ['#', 'Name', 'Something', 'Date']
  columnData: TableRow[] = [
    {
      values: ['1', 'Use Case 1', 'uc2', '2016-05-26'],
      actionButtons: [{
        name: 'edit',
        bootstrapIcon: 'bi bi-pencil-fill',
        classes: 'btn-primary',
        style: '',
        onClick: (index: number) => this.router.navigate(['/use-case-details'])
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

  constructor(private router: Router, private notifications: NotificationsService) {
  }

  ngOnInit(): void {
  }

  onDelete(index: number) {
    this.notifications.success(
      "Deleted",
      "Requirement 1 has been deleted successfully"
      , {
        theClass: 'success',
        timeOut: 2000,
        showProgressBar: false
      }
    );
  }

  onCreateNewItem(myForm: NgForm) {

  }
}
