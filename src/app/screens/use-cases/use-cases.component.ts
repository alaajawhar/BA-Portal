import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.css']
})
export class UseCasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log("he")
  }
}
