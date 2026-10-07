import { Component, OnInit } from '@angular/core';
import { getAllUsers } from '../../database/users';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{

  users:User[]=[];
  loading:boolean= true;

ngOnInit() {
  this.loading =true;
  getAllUsers()
  .then((users:User[])=>{
    
    this.users =users;
    this.loading =false;
  })
}
// =====================
editUser(user:User){

}
// ======================
detailsUser(user:User){

}
// ======================
deleteUser(user:User, index:number){
  
  this.users.splice(index,1);
  alert('User Deleted Successfully')
}



}
