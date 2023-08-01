import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-danger-dialog',
  templateUrl: './danger-dialog.component.html',
  styleUrls: ['./danger-dialog.component.css'],
})
export class DangerDialogComponent {

  @Input() title: string = "Are you sure?";
  @Input() description: string = "Do you really want to delete these records? This process cannot be undone."
  @Input() dangerButtonText: string = "Delete"
  @Input() secondaryButtonText: string = "Cancel"

  closeModal() {
  }
}
