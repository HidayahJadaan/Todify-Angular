import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path:'',
    // component:UsersListComponent
    redirectTo:'list',
    pathMatch:'full'
  },
  {
    path:'list',
    component:UsersListComponent
  },
  {
    path:'add',
    component:UserFormComponent
  },
  {
    path:'edit/:id',
    component:UserFormComponent
  },
  {
    path:'details/:id',
    component:UserDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
