import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";
import {BsModalService} from "ngx-bootstrap/modal";
import {GAddCategoryModalComponent} from "../g-add-category-modal/g-add-category-modal.component";

@Component({
  selector: 'app-glossary-details',
  templateUrl: './glossary-details.component.html',
  styleUrls: ['./glossary-details.component.css']
})
export class GlossaryDetailsComponent implements OnInit {
  selectedCategory: string = 'one';
  availableCategories: string[] = ['one', 'two', 'three'];

  constructor(private router: Router, private notifications: NotificationsService, private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  onAdd() {
    console.log(this.selectedCategory)
    let modalRef = this.modalService.show(GAddCategoryModalComponent, {
      animated: false,
    });


    modalRef.content.newItemSubject.subscribe((newItem: any) => {
      console.log(`new item has been added: ${newItem.desc}`)
      this.availableCategories.push(newItem.desc)
    });
  }
}
