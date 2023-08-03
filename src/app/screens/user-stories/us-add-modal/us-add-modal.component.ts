import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subject} from "rxjs";
import {BsModalRef} from "ngx-bootstrap/modal";
import {UsItem} from "./us-add-modal-data";

@Component({
  selector: 'app-us-add-modal',
  templateUrl: './us-add-modal.component.html',
  styleUrls: ['./us-add-modal.component.css']
})
export class UsAddModalComponent implements OnInit {

  newItem: UsItem = {
    name: ""
  };

  public newItemSubject: Subject<UsItem>;

  constructor(private bsModalRef: BsModalRef) {
  }

  ngOnInit() {
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
