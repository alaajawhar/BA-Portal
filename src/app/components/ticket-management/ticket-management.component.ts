import {Component, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ITodo, TodoService} from "./TodoService";
import {AddNewTicketComponent} from "./add-new-ticket/add-new-ticket.component";

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.css']
})
export class TicketManagementComponent implements OnInit, OnDestroy {
  columns = [
    { prop: 'title', name: 'Title' },
    { prop: 'sales', name: 'Sales' },
    { prop: 'stock', name: 'Stock' },
    { prop: 'category', name: 'Category' },
    { prop: 'id', name: 'Id' }
  ];
  itemsPerPage = 10;
  itemOptionsPerPage = [5, 10, 20];
  selected = [];
  selectAllState = '';
  itemOrder = 'Title';
  itemOptionsOrders = ['Title', 'Category', 'Status', 'Label'];
  displayOptionsCollapsed = true;

  todoItems: ITodo[] = [];

  // @ts-ignore
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewTicketComponent;

  constructor(private todoService: TodoService, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.addClass(document.body, 'right-menu');
    this.getItems();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'right-menu');
  }

  getItems() {
    this.todoService.getTodoItems()
      .subscribe(items => {
        this.todoItems = items;
      });
  }

  showAddNewModal() {
    this.addNewModalRef.show();
  }

  isSelected(p: ITodo) {
    // @ts-ignore
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }
  onSelect(item: ITodo) {
    if (this.isSelected(item)) {
      // @ts-ignore
      this.selected = this.selected.filter(x => x.id !== item.id);
    } else {
      // @ts-ignore
      this.selected.push(item);
    }
    this.setSelectAllState();
  }

  setSelectAllState() {
    if (this.selected.length === this.todoItems.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }

  selectAll($event: any) {
    if ($event.target.checked) {
      // @ts-ignore
      this.selected = [...this.todoItems];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }


}
