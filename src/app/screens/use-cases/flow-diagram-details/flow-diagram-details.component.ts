import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LogicalStepEnum} from "./logic-condition/logic-condition-data";
@Component({
  selector: 'app-flow-diagram-details',
  templateUrl: './flow-diagram-details.component.html',
  styleUrls: ['./flow-diagram-details.component.css']
})
export class FlowDiagramDetailsComponent implements OnInit {

  @Input() stepType: LogicalStepEnum = undefined!
  ifStep: LogicalStepEnum = LogicalStepEnum.IF

  newTaskTitle: string = undefined!
  newTaskDesc: string = undefined!
  newTaskType: string = undefined!

  thenList: string[] = [
    ""
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onAddThenCondition(event: any) {
    this.thenList.push(event.target.value)
  }

  onCreateNewItem(formDetails: NgForm) {

    console.log(formDetails.value.newTaskTitle)
    console.log(formDetails.value.newTaskDesc)
    console.log(formDetails.value.newTaskType)
  }


}
