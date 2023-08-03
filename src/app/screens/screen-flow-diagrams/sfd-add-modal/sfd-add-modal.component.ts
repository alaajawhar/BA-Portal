import { Component, OnInit } from '@angular/core';
import {ScreenFlowDiagramItem} from "../screen-flow-diagram-data";
import {Subject} from "rxjs";
import {BsModalRef} from "ngx-bootstrap/modal";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sfd-add-modal',
  templateUrl: './sfd-add-modal.component.html',
  styleUrls: ['./sfd-add-modal.component.css']
})
export class SfdAddModalComponent implements OnInit {

  newItem: ScreenFlowDiagramItem = {
    name: ""
  }

  public newItemSubject: Subject<ScreenFlowDiagramItem>;

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
