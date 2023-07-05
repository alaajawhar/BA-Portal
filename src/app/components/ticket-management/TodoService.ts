import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface ITodo {
  id: number;
  title: string;
  detail: string;
  category: string;
  status: string;
  label: string;
  labelColor: string;
  date: string;
}

export interface IServiceResponse<T> {
  status: boolean;
  data: T[];
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }


  // getTodoItems(): Observable<ITodo[]> {
  //   const url = `/todos`;
  //   return this.http.get(url)
  //     .pipe(
  //       // @ts-ignore
  //       map((res: IServiceResponse<ITodo>) => {
  //         return res.data;
  //       })
  //     );
  // }

  todoItems: ITodo[] = [
    {
      "id": 1,
      "title": "Book train tickets",
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      "category": "Problem Report",
      "status": "PENDING",
      "label": "COMPLETED",
      "labelColor": "success",
      "date": "25.12.2022"
    },
    {
      "id": 2,
      "title": "Complete weekly delivery",
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      "category": "Change Request",
      "status": "PENDING",
      "label": "PENDING",
      "labelColor": "warning",
      "date": "23.12.2022"
    },
    {
      "id": 3,
      "title": "Take photos of cakes",
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      "category": "ISSUE",
      "status": 'COMPLETED',
      "label": "OVERDUE",
      "labelColor": "danger",
      "date": "22.12.2022"
    },
    {
      "id": 4,
      "title": "Take photos of cakes",
      "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      "category": "BUG",
      "status": 'COMPLETED',
      "label": "COMPLETED",
      "labelColor": "success",
      "date": "22.12.2022"
    }
  ];

  getTodoItems = (): Observable<ITodo[]> => {
    return of(this.todoItems);
  };

}
