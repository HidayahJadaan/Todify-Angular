import { Component, OnInit } from '@angular/core';
import { getAllTodos } from '../../database/users';
import { Todo } from '../../models/todo.model';
import { Router } from '@angular/router';
import { ITodoType } from '../../models/Itodo.model';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {

  constructor(private _router: Router) {}

  todos: Todo[] = [];

  filteredTodos: Todo[] = [];

  loading: boolean = true;

  // IMPORTANT:
  // '' means All Tasks
  status: ITodoType | '' = '';

  ngOnInit() {

    this.loading = true;

    getAllTodos()
      .then((todos: Todo[]) => {

        this.todos = todos;

        // Show ALL todos initially
        this.filteredTodos = [...this.todos];

        this.loading = false;

      });

  }

  // =========================
  // FILTER
  // =========================

  filterTodos() {

    console.log('Selected status:', this.status);

    // ALL TASKS
    if (this.status === '') {

      this.filteredTodos = [...this.todos];

    } else {

      // FILTER BY STATUS
      this.filteredTodos = this.todos.filter(
        (todo: Todo) => todo.status === this.status
      );

    }

    console.log('Filtered todos:', this.filteredTodos);
  }

  // =========================
  // EDIT
  // =========================

  editUser(todo: Todo) {

    this._router.navigate([
      'users',
      'edit',
      todo.id
    ]);

  }

  // =========================
  // DELETE
  // =========================

  deleteUser(todo: Todo, index: number) {

    // Remove from original array
    const todoIndex = this.todos.findIndex(
      t => t.id === todo.id
    );

    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1);
    }

    // Update displayed list
    this.filterTodos();

    alert('Todo Deleted Successfully');
  }

}