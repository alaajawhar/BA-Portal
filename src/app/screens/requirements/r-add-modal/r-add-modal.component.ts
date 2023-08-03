import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {ActorItem} from "../../actors/actors-data";
import {BsModalRef} from "ngx-bootstrap/modal";
import {NgForm} from "@angular/forms";
import {RequirementItem} from "../requirements-data";
import {RequirementType} from "../../../shared/data/Enums";

@Component({
  selector: 'app-r-add-modal',
  templateUrl: './r-add-modal.component.html',
  styleUrls: ['./r-add-modal.component.css']
})
export class RAddModalComponent implements OnInit {

  newItem: RequirementItem = {
    name: "",
    type: RequirementType.BUSINESS_RULE,
  }

  requirementTypes: RequirementType[] = [
    RequirementType.REQUIREMENTS,
    RequirementType.BUSINESS_REQUIREMENTS,
    RequirementType.BUSINESS_RULE,
    RequirementType.FEATURE,
  ]



  public newItemSubject: Subject<RequirementItem>;
  constructor(private bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.newItemSubject = new Subject();
  }

  onCreateNewItem(myForm: NgForm) {
    this.newItemSubject.next(this.newItem)
    this.bsModalRef.hide()
  }

  onClose() {
    this.bsModalRef.hide()
  }
}
