import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-use-case-requirements',
  templateUrl: './use-case-requirements.component.html',
  styleUrls: ['./use-case-requirements.component.css']
})
export class UseCaseRequirementsComponent implements OnInit {
  table: requirementDto[] = [
    {
      "id": 1,
      "name": "Requirement 1",
      "type": "Feature",
      "updatedDate": "2016-05-26"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  newRequirement: requirementDto = {
    "id": 1,
    "name": "",
    "type": "",
    "updatedDate": ""
  };

  onCreateNewItem(myForm: NgForm) {
    this.table.push({
      id: 0, name: this.newRequirement.name, type: this.newRequirement.type, updatedDate: this.newRequirement.updatedDate
    })
  }
}

export interface requirementDto {
  id: number;
  name: string;
  type: string;
  updatedDate: string;
}
