import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-base-screen',
  templateUrl: './base-screen.component.html',
  styleUrls: ['./base-screen.component.css']
})
export class BaseScreenComponent implements OnInit {

  @Input() content: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
