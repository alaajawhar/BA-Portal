import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UseCaseItem} from "../use-case-diagram-data";
import {Subject} from "rxjs";
import {ActorItem} from "../../actors/actors-data";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-ucd-add-modal',
  templateUrl: './ucd-add-modal.component.html',
  styleUrls: ['./ucd-add-modal.component.css']
})
export class UcdAddModalComponent implements OnInit {

  newItem: UseCaseItem = {
    name: ""
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
