import { Component, OnInit } from '@angular/core';
import {RequirementItem} from "../../../requirements/requirements-data";
import {RequirementType} from "../../../../shared/data/Enums";
import {Subject} from "rxjs";
import {BsModalRef} from "ngx-bootstrap/modal";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-uc-r-link-modal',
  templateUrl: './uc-r-link-modal.component.html',
  styleUrls: ['./uc-r-link-modal.component.css']
})
export class UcRLinkModalComponent implements OnInit {

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
