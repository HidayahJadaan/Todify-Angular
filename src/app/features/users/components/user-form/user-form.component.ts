import { Component, OnInit } from '@angular/core';
import { addTodo, editTodo, getTodoById } from '../../database/users';
// import { User } from '../../models/user.model';
import { ITodoType } from '../../models/Itodo.model';
import { Todo } from '../../models/todo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  constructor(private _router:Router,private _route: ActivatedRoute) {}

  id: string | null = '';
  title: string = '';
  description: string = '';
  status: ITodoType = 'pending';
  errors: string[] = [];
  success: string = '';
  loading: boolean = false;
  isEdit:boolean =false;

  // =============================================
  // Save Todo
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');

    if (this.id) {
      // get todo data
      this.isEdit = true;
      getTodoById(this.id)
        .then((todo: Todo) => {
this.isEdit =false;
          this.title= todo.title;
          this.description = todo.description;
          this.status = todo.status   
        })
        .catch((error: string) => {
          this.errors.push(error);
        });
    }
  }
  // =============================================
  saveTodo(): void {
    // Clear previous messages
    this.errors = [];
    this.success = '';

    // Validation

    if (!this.title.trim()) {
      this.errors.push('Title is Required');
    }

    if (!this.description.trim()) {
      this.errors.push('Description is Required');
    }

    // Stop if there are validation errors
    if (this.errors.length > 0) {
      return;
    }

    // Create Todo object

    const todo: Todo = {
      title: this.title.trim(),
      description: this.description.trim(),
      status: this.status,
    };

    // Start loading

    this.loading = true;

    if (this.id) {
      // edit

      todo.id = this.id;
      editTodo(todo)
        .then(() => {
          // Stop loading
          this.loading = false;

          // Show success message
          this.success = 'Todo Upadated Successfully';
      // this._router.navigate(['users','list'])
       
        })
        .catch((error) => {
          // Stop loading
          this.loading = false;

          // Show error
          this.errors.push('Failed to update Todo. Please try again.');

          console.error('Error editing todo:', error);
        });
    } else {
      // Save to database

      addTodo(todo)
        .then((user: Todo) => {
          // Stop loading
          this.loading = false;

          // Show success message
          this.success = 'Todo Added Successfully';

          // Clear form
          this.title = '';
          this.description = '';
        })
        .catch((error) => {
          // Stop loading
          this.loading = false;

          // Show error
          this.errors.push('Failed to add Todo. Please try again.');

          console.error('Error adding todo:', error);
        });
    }
    // =========end else
  }
  // ======== end save todo
}
