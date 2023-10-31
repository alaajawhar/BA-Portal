import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BsModalRef} from "ngx-bootstrap/modal";
import {Subject} from "rxjs";
import {GlossaryCategory} from "../glossary-data";

@Component({
  selector: 'app-g-add-category-modal',
  templateUrl: './g-add-category-modal.component.html',
  styleUrls: ['./g-add-category-modal.component.css']
})
export class GAddCategoryModalComponent implements OnInit {
  newItem: GlossaryCategory = {
    desc: "", name: ""
  };

  public newItemSubject: Subject<GlossaryCategory>;

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
