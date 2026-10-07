import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  success: boolean = false;
  constructor(private _router:Router){}

  // =======================
  userLogin() {
    this.error = '';
    this.success=false;
    if (this.email.trim() && this.password.trim()) {
      // success login
      this.success =true;
      setTimeout(()=>{

        this._router.navigate(['users'])
      },2000)
    } else {
      // show error
      this.error = 'Inalid email or password';
    }
  }

  // =======================
}
