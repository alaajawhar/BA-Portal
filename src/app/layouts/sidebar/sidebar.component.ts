import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selectedTab: string = ""

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  activeClass(routingTab: string) {
    return this.route.url.indexOf(routingTab) >= 0 ?  '' : 'collapsed';
  }

}
