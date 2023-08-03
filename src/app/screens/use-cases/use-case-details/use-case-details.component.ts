import {Component, OnInit} from '@angular/core';
import {LogicalStepEnum} from "../flow-diagram-details/logic-condition/logic-condition-data";

@Component({
  selector: 'app-use-case-details',
  templateUrl: './use-case-details.component.html',
  styleUrls: ['./use-case-details.component.css']
})
export class UseCaseDetailsComponent implements OnInit {

  dropdownList = [
    { id: 1, itemName: 'Customer' },
    { id: 2, itemName: 'Merchant' },
    { id: 3, itemName: 'Sender' },
    { id: 4, itemName: 'Receiver' },
    { id: 5, itemName: 'Middleman' },
  ];
  primarySelectedItems = [
    { id: 1, itemName: 'Customer' },
    { id: 4, itemName: 'Receiver' },
  ];
  secondarySelectedItems = [
    { id: 1, itemName: 'Customer' },
    { id: 4, itemName: 'Receiver' },
  ];
  dropdownSettings = {};

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Countries',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: ''
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.primarySelectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.primarySelectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }


}
