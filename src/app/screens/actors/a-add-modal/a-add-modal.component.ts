import {Component, OnInit} from '@angular/core';
import {ActorItem} from "../actors-data";
import {NgForm} from "@angular/forms";
import {Subject} from "rxjs";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-a-add-modal',
  templateUrl: './a-add-modal.component.html',
  styleUrls: ['./a-add-modal.component.css']
})
export class AAddModalComponent implements OnInit {

  newItem: ActorItem = {
    alias: "", name: ""
  }

  public newItemSubject: Subject<ActorItem>;

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
