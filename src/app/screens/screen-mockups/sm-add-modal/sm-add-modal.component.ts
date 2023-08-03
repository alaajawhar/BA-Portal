import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {ActorItem} from "../../actors/actors-data";
import {BsModalRef} from "ngx-bootstrap/modal";
import {NgForm} from "@angular/forms";
import {ScreenMockupItem} from "../screen-mockup-data";

@Component({
  selector: 'app-sm-add-modal',
  templateUrl: './sm-add-modal.component.html',
  styleUrls: ['./sm-add-modal.component.css']
})
export class SmAddModalComponent implements OnInit {

  newItem: ScreenMockupItem = {
    name: ""
  }

  public newItemSubject: Subject<ScreenMockupItem>;

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
