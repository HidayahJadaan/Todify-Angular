import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getTodoById } from '../../database/users';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  id: string | null = '';
  error: string = '';
  success: string = '';
  loading: boolean = false;
  todo!:Todo;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.loading = true;
    if (this.id) {
      getTodoById(this.id)
      .then((todo:Todo)=>{

        this.loading =false;
        this.todo = todo

      })
      .catch((err:string)=>{

        this.error=err;
        this.loading=false;
      })
    } else {
      this.error = 'Invalid Todo ID';
    }
  }
}
