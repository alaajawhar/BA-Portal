import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {Item} from "./item";

@Component({
  selector: 'app-logical-flow',
  templateUrl: './logical-flow.component.html',
  styleUrls: ['./logical-flow.component.css']
})
export class LogicalFlowComponent {

  @Input() item: Item;
  @Input() parentItem: Item;
  @Output() itemDrop: EventEmitter<CdkDragDrop<Item>>

  @Input()
  public set connectedDropListsIds(ids: string[]) {
    this.allDropListsIds = ids;
  }

  public get connectedDropListsIds(): string[] {
    return this.allDropListsIds.filter((id) => id !== this.item.uId);
  }

  public allDropListsIds: string[];

  public get dragDisabled(): boolean {
    return !this.parentItem;
  }

  public get parentItemId(): string {
    // return '';
    return this.dragDisabled ? '' : this.parentItem.uId;
  }

  constructor() {
    this.allDropListsIds = [];
    this.itemDrop = new EventEmitter();
  }

  public onDragDrop(event: CdkDragDrop<Item, Item>): void {
    this.itemDrop.emit(event);
  }

}
