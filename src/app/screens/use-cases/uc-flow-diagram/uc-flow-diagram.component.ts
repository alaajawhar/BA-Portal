import { Component, OnInit } from '@angular/core';
import {LogicalStepEnum} from "../flow-diagram-details/logic-condition/logic-condition-data";

@Component({
  selector: 'app-uc-flow-diagram',
  templateUrl: './uc-flow-diagram.component.html',
  styleUrls: ['./uc-flow-diagram.component.css']
})
export class UcFlowDiagramComponent implements OnInit {
  stepTest: LogicalStepEnum = LogicalStepEnum.IF
  flowList: [{}] = [
    {

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddFlow() {
    this.flowList.push({
    })
  }

}
