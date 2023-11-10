import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  LOGICAL_STEP_CONSTANTS,
  LogicalConditionModel,
  LogicalConditionOutput,
  LogicalStepEnum
} from "./logic-condition-data";

@Component({
  selector: 'app-logic-condition',
  templateUrl: './logic-condition.component.html',
  styleUrls: ['./logic-condition.component.css']
})
export class LogicConditionComponent implements OnInit {

  @Input() logicalConditionModel: LogicalConditionModel =
    {
      type: LogicalStepEnum.IF, condition: "", value: '',
      thenList: [
        {
          type: LogicalStepEnum.TEXT, condition: "", value: '', thenList: [
            {
              type: LogicalStepEnum.TEXT, condition: "", value: '', thenList: [
                {
                  type: LogicalStepEnum.TEXT, condition: "", value: '', thenList: [
                    {
                      type: LogicalStepEnum.TEXT, condition: "", value: '', thenList: undefined,
                    }
                  ],
                }
              ],
            }
          ]
        }
      ],
    }
  @Input() isFirst: boolean = false
  availableStepTypes = LOGICAL_STEP_CONSTANTS

  // @Input() stepType: LogicalStepEnum = undefined!
  // @Input() isFirst: boolean = false
  //
  // textStep: LogicalStepEnum = LogicalStepEnum.TEXT
  // ifStep: LogicalStepEnum = LogicalStepEnum.IF
  // gotoStep: LogicalStepEnum = LogicalStepEnum.GOTO
  // stepOutput: LogicalConditionOutput = {
  //   condition: "", type: undefined!, value: ''
  // };
  //
  // selectedResultType: LogicalStepEnum = LogicalStepEnum.TEXT
  //
  // availableStepTypes = LOGICAL_STEP_CONSTANTS
  //
  // thenList: string[] = [
  //   "sad"
  // ]

  @Output() stepOutputEventEmitter: EventEmitter<LogicalConditionOutput>

  constructor() {
    this.stepOutputEventEmitter = new EventEmitter();
  }


  ngOnInit(): void {

  }

  // onAddThenCondition(event: any) {
  // this.thenList.push(event.target.value)
  // }

  onChangeText(event: any) {
    // this.stepOutput.value = event.target.value;
    // this.stepOutput.type = this.stepType;
    // this.stepOutputEventEmitter.emit(this.stepOutput)
  }

  onChangeIf(event: any) {
    // this.stepOutput.value = event.target.value;
    // this.stepOutput.type = this.stepType;
    // this.stepOutputEventEmitter.emit(this.stepOutput)
  }

  public get logicalStepEnum(): typeof LogicalStepEnum {
    return LogicalStepEnum;
  }

  allLogicalSteps(): LogicalStepEnum[] {
    return [
      LogicalStepEnum.TEXT,
      LogicalStepEnum.IF,
      LogicalStepEnum.GOTO,
    ];
  }

  ifThenOnChange(event: any) {
    console.log('changed!!!')
    this.logicalConditionModel.type = event.target.value;
  }

  onChangeStepType(event: any) {
    console.log('changed!!')
    this.logicalConditionModel.type = event.target.value;
  }

  onAddThenCondition(event: any) {
    this.logicalConditionModel.thenList.push(
      {
        type: LogicalStepEnum.TEXT, condition: "", value: '', thenList: [
          {
            type: LogicalStepEnum.TEXT, condition: "", value: '', thenList: [
              {
                type: LogicalStepEnum.TEXT, condition: "", value: '', thenList: [
                  {
                    type: LogicalStepEnum.TEXT, condition: "", value: '', thenList: undefined,
                  }
                ],
              }
            ],
          }
        ]
      }
    );
  }
}
