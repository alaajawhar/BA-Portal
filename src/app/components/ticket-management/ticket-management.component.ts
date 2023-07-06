import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.css']
})
export class TicketManagementComponent implements OnInit{

  newTaskTitle: string = undefined!
  newTaskDesc: string = undefined!
  newTaskType: string = undefined!

  todoItems: ITodo[] = []

  constructor() {
  }


  ngOnInit(): void {
    this.todoItems = [
      {
        "id": 1,
        "title": "Create PosUser As actor",
        "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        "category": "Task",
        "date": "25.12.2022"
      },
      {
        "id": 2,
        "title": "Delete customer actor",
        "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        "category": "Change Request",
        "date": "23.12.2022"
      },
      {
        "id": 3,
        "title": "Cannot change mobile number",
        "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        "category": "ISSUE",
        "date": "22.12.2022"
      },
      {
        "id": 4,
        "title": "Error message is always showing",
        "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        "category": "BUG",
        "date": "22.12.2022"
      }
    ];
  }

  onCreateNewItem(formDetails: NgForm) {
    console.log(this.todoItems)

    console.log(formDetails.value.newTaskTitle)
    console.log(formDetails.value.newTaskDesc)
    console.log(formDetails.value.newTaskType)

    let newItem: any = {
      "id": 0,
      "title": formDetails.value.newTaskTitle,
      "detail": formDetails.value.newTaskDesc,
      "category": formDetails.value.newTaskType,
      "date": "22.12.2022"
    }

    this.todoItems.unshift(newItem)

    console.log(this.todoItems)
  }

  onDelete() {
    console.log("hjajsd")
  }

}

export interface ITodo {
  id: number;
  title: string;
  detail: string;
  category: string;
  date: string;
}
