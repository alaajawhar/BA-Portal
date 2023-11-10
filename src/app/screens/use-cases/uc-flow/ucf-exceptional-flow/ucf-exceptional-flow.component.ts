import {Component, OnInit} from '@angular/core';
import {
  LogicalConditionOutput,
  LogicalStepEnum
} from "../../../../shared/components/logic-condition/logic-condition-data";

@Component({
  selector: 'app-ucf-exceptional-flow',
  templateUrl: './ucf-exceptional-flow.component.html',
  styleUrls: ['./ucf-exceptional-flow.component.css']
})
export class UcfExceptionalFlowComponent implements OnInit {
  stepTest: LogicalStepEnum = LogicalStepEnum.TEXT
  flowList: [{}] = [
    {

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddFlow() {
    console.log("onAddFlow")
    this.flowList.push({
    })
  }

  stepOutputResult(logicalConditionOutput: LogicalConditionOutput) {
    console.log(`hello 1: ${logicalConditionOutput.type}`)
    console.log(`hello 2: ${logicalConditionOutput.value}`)
  }
}
