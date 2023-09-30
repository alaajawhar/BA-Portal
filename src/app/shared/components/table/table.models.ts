export interface ButtonAction {
  name: string;
  bootstrapIcon: string;
  classes: string;
  style: string;
  onClick: (index: number) => void;
}
export interface TableRow {
  values: TableRowItem[];
  actionButtons: ButtonAction[]
}

export interface TableRowItem {
  type: RowTableTypeEnum;
  properties: any;
}
export enum RowTableTypeEnum {
  TEXT = "TEXT", BADGE = "BADGE"
}
