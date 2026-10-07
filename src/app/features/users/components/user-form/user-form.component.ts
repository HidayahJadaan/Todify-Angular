import { Component } from '@angular/core';
import { addUser } from '../../database/users';
import { User } from '../../models/user.model';
import { ITodoType } from '../../models/Itodo.model';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {

  title: string = '';
  description: string = '';
status: ITodoType = 'pending';
  errors: string[] = [];
  success: string = '';
  loading: boolean = false;

  // =============================================
  // Save Todo
  // =============================================
  saveTodo(): void {

    // Clear previous messages
    this.errors = [];
    this.success = '';

    // =============================================
    // Validation
    // =============================================

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

    // =============================================
    // Start loading
    // =============================================

    this.loading = true;

    // =============================================
    // Create Todo/User object
    // =============================================

    const todo: User = {
      name: this.title.trim(),
      email: this.description.trim(),
      password: this.description.trim(),
    };

    // =============================================
    // Save to database
    // =============================================

    addUser(todo)
      .then((user: User) => {

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
}