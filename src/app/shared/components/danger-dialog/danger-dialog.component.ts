import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-danger-dialog',
  templateUrl: './danger-dialog.component.html',
  styleUrls: ['./danger-dialog.component.css'],
})
export class DangerDialogComponent implements OnInit {


  title: string = "Are you sure?";
  description: string = "Do you really want to delete these records? This process cannot be undone."

  public isConfirmed: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.isConfirmed = new Subject();
  }

  onConfirm() {
    this.isConfirmed.next(true);
    this.bsModalRef.hide();
  }

  onCancel() {
    this.isConfirmed.next(false);
    this.bsModalRef.hide();
  }


}
