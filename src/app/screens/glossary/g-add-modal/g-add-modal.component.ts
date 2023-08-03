import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {GlossaryItem} from "../glossary-data";
import {Subject} from "rxjs";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-g-add-modal',
  templateUrl: './g-add-modal.component.html',
  styleUrls: ['./g-add-modal.component.css']
})
export class GAddModalComponent implements OnInit {

  newItem: GlossaryItem = {
    alias: "", date: "", name: ""
  }

  public newItemSubject: Subject<GlossaryItem>;

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
