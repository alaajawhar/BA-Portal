import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-a-goals',
  templateUrl: './a-goals.component.html',
  styleUrls: ['./a-goals.component.css']
})
export class AGoalsComponent implements OnInit {
  newGoal: string = '';
  availableGoals: string[] = ['Goal1', 'Goal2']

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddNewGoal(myForm: NgForm) {
    console.log(`New goal has been added: ${this.newGoal}`)
    this.availableGoals.unshift(this.newGoal)
    this.newGoal='';
  }
}
