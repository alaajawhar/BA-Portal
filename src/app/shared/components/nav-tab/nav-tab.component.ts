import {Component, Input, OnInit} from '@angular/core';
import {NavTav} from "./nav-tav";

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css']
})
export class NavTabComponent implements OnInit {

  @Input() title: string;
  @Input() tabs: NavTav[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
