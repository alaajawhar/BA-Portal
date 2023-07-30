import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ButtonAction, TableRow} from "../../shared/table/table.models";
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";

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
      values: ['Requirement 1', 'Feature', '2016-05-26'],
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

  onCreateNewItem(myForm: NgForm) {
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
}
