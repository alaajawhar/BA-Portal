import {Component, Input, OnInit} from '@angular/core';
import {LOGICAL_STEP_CONSTANTS, LogicalStepEnum} from "./logic-condition-data";

@Component({
  selector: 'app-logic-condition',
  templateUrl: './logic-condition.component.html',
  styleUrls: ['./logic-condition.component.css']
})
export class LogicConditionComponent implements OnInit {

  @Input() stepType: LogicalStepEnum = undefined!
  @Input() isFirst: boolean = false

  textStep: LogicalStepEnum = LogicalStepEnum.TEXT
  ifStep: LogicalStepEnum = LogicalStepEnum.IF

  selectedResultType: LogicalStepEnum = LogicalStepEnum.TEXT
  LOGICAL_STEP_CONSTANTS= LOGICAL_STEP_CONSTANTS

  thenList: string[] = [
    "sad"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddThenCondition(event: any) {
    console.log(this.selectedResultType)
    this.thenList.push(event.target.value)
  }

  onChange(changedDropdown: string) {
    if (changedDropdown === 'user') {
    } else {
    }
  }

}
