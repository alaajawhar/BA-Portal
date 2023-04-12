import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  @Input() title: string | undefined
  @Input() subtitle: string | undefined

  constructor() {}

  ngOnInit(): void {}

}
