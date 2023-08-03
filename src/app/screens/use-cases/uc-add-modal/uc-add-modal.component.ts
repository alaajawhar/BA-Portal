import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UseCaseItem} from "../use-case-data";
import {Subject} from "rxjs";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-uc-add-modal',
  templateUrl: './uc-add-modal.component.html',
  styleUrls: ['./uc-add-modal.component.css']
})
export class UcAddModalComponent implements OnInit {

  newItem: UseCaseItem = {
    name: "", something: ""
  }

  public newItemSubject: Subject<UseCaseItem>;

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
