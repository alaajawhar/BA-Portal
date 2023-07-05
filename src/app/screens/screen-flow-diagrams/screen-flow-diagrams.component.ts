import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NotificationsService, NotificationType} from "angular2-notifications";

@Component({
  selector: 'app-screen-flow-diagrams',
  templateUrl: './screen-flow-diagrams.component.html',
  styleUrls: ['./screen-flow-diagrams.component.css']
})
export class ScreenFlowDiagramsComponent implements OnInit {

  constructor(private notifications: NotificationsService) {
  }

  ngOnInit(): void {
  }

  onDelete() {
    // alert("Hello! I am an alert box!!");
    this.notifications.success("Delete", "Item has been successfully deleted"
      , {
        theClass: 'success',
        timeOut: 2000,
        showProgressBar: false
      }
    );
  }
}
