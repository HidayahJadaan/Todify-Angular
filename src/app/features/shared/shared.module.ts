import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    AuthHeaderComponent,
    AuthFooterComponent
  ],
  imports: [
    CommonModule,
    // AppRoutingModule
    RouterModule,
    FormsModule
],
  exports:[
    AuthLayoutComponent, DatePipe, AuthHeaderComponent,
    AuthFooterComponent,FormsModule
  ]
})
export class SharedModule { }
