export enum LogicalStepEnum {
  TEXT= 'TEXT',
  IF= 'IF',
  ELSE_IF= 'ELSE IF',
  ELSE= 'ELSE',
  FOREACH_LOOP= 'FOREACH LOOP',
  WHILE_LOOP= 'WHILE LOOP',
  UNTIL_LOOP= 'UNTIL LOOP',
  RESUME_FROM_BEGINNING_LOOP= 'RESUME FROM BEGINNING LOOP',
  EXIST_LOOP= 'EXIST LOOP',
  CONTINUE_FROM_OF= 'CONTINUE FROM_OF',
  RESUME_FROM_BRANCHING_STEP= 'RESUME FROM BRANCHING STEP',
  INSERT_STEP_REFERENCE= 'INSERT STEP REFERENCE',
  USE_CASE_ENDS_WITH_SUCCESS= 'USE CASE ENDS WITH SUCCESS',
  USE_CASE_ENDS_WITH_FAILURE = 'USE CASE ENDS WITH FAILURE'
}

export interface LogicalStep {
  type: LogicalStepEnum;
  text: string;
}

export const LOGICAL_STEP_CONSTANTS: LogicalStep[] = [
  {
    type: LogicalStepEnum.TEXT,
    text: LogicalStepEnum.TEXT.valueOf()
  },
  {
    type: LogicalStepEnum.IF,
    text: LogicalStepEnum.IF.valueOf()
  },
  {
    type: LogicalStepEnum.ELSE_IF,
    text: LogicalStepEnum.ELSE_IF.valueOf()
  },
  {
    type: LogicalStepEnum.ELSE,
    text: LogicalStepEnum.ELSE.valueOf()
  },
  {
    type: LogicalStepEnum.FOREACH_LOOP,
    text: LogicalStepEnum.FOREACH_LOOP.valueOf()
  },
  {
    type: LogicalStepEnum.WHILE_LOOP,
    text: LogicalStepEnum.WHILE_LOOP.valueOf()
  },
  {
    type: LogicalStepEnum.UNTIL_LOOP,
    text: LogicalStepEnum.UNTIL_LOOP.valueOf()
  },
  {
    type: LogicalStepEnum.RESUME_FROM_BEGINNING_LOOP,
    text: LogicalStepEnum.RESUME_FROM_BEGINNING_LOOP.valueOf()
  },
  {
    type: LogicalStepEnum.EXIST_LOOP,
    text: LogicalStepEnum.EXIST_LOOP.valueOf()
  },
  {
    type: LogicalStepEnum.CONTINUE_FROM_OF,
    text: LogicalStepEnum.CONTINUE_FROM_OF.valueOf()
  },
  {
    type: LogicalStepEnum.RESUME_FROM_BRANCHING_STEP,
    text: LogicalStepEnum.RESUME_FROM_BRANCHING_STEP.valueOf()
  },
  {
    type: LogicalStepEnum.INSERT_STEP_REFERENCE,
    text: LogicalStepEnum.INSERT_STEP_REFERENCE.valueOf()
  },
  {
    type: LogicalStepEnum.USE_CASE_ENDS_WITH_SUCCESS,
    text: LogicalStepEnum.USE_CASE_ENDS_WITH_SUCCESS.valueOf()
  },
  {
    type: LogicalStepEnum.USE_CASE_ENDS_WITH_FAILURE,
    text: LogicalStepEnum.USE_CASE_ENDS_WITH_FAILURE.valueOf()
  },

]

