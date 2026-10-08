import { Component, OnInit } from '@angular/core';
import { getAllTodos } from '../../database/users';
import { User } from '../../models/user.model';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{

  todos:Todo[]=[];
  loading:boolean= true;

ngOnInit() {
  this.loading =true;
  getAllTodos()
  .then((users:Todo[])=>{
    
    // this.todos =[...users];//copy from the main array
    this.todos =users;//copy from the main array
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
deleteUser(user:Todo, index:number){
  
  this.todos.splice(index,1);
  alert('Todo Deleted Successfully')
}



}
