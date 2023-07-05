import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-ticket-menu',
  templateUrl: './ticket-menu.component.html',
  styleUrls: ['./ticket-menu.component.css']
})
export class TicketMenuComponent implements OnInit {
  isOpen = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: any) {
    if (this.isOpen) {
      this.toggle();
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  menuClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
