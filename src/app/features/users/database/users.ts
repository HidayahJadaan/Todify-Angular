import { Todo } from '../models/todo.model';
import { User } from '../models/user.model';

// const users:User[] =[
// {
//     id:'user-1',
//     name:'Hedaia Jadaan',
//     email:'hedaia@user.com',
//     password:'123',
//     created_at:new Date('2026-10-07')

// },
// {
//     id:'user-2',
//     name:'Mohammed Jadaan',
//     email:'mohammed@user.com',
//     password:'123',
//     created_at:new Date('2026-09-02')

// },
// {
//     id:'user-3',
//     name:'Ibrahim Jadaan',
//     email:'ibrahim@user.com',
//     password:'123',
//     created_at:new Date('2026-10-4')

// },
// ];
const todos: Todo[] = [
  {
    id: '1',
    title: 'Complete Angular Project',
    description: 'Finish the Todo Management application using Angular.',
    status: 'in-progress',
    created_at: '2026-10-01T09:30:00',
    updated_at: '2026-10-05T14:20:00',
  },
  {
    id: '2',
    title: 'Design Todo Card',
    description:
      'Create a modern and responsive design for the Todo card component.',
    status: 'completed',
    created_at: '2026-10-01T11:00:00',
    updated_at: '2026-10-03T16:30:00',
  },
  {
    id: '3',
    title: 'Add Login Validation',
    description: 'Add validation messages for email and password fields.',
    status: 'pending',
    created_at: '2026-10-02T10:15:00',
    updated_at: '2026-10-02T10:15:00',
  },
  {
    id: '4',
    title: 'Create Todo Details Page',
    description:
      'Build a details page that displays the complete information of a selected todo.',
    status: 'in-progress',
    created_at: '2026-10-03T08:45:00',
    updated_at: '2026-10-06T12:10:00',
  },
  {
    id: '5',
    title: 'Fix Routing Issues',
    description:
      'Check the Angular routes and make sure all navigation links work correctly.',
    status: 'completed',
    created_at: '2026-10-03T13:20:00',
    updated_at: '2026-10-04T17:00:00',
  },
  {
    id: '6',
    title: 'Implement Search',
    description:
      'Add a search feature to filter todos by title and description.',
    status: 'pending',
    created_at: '2026-10-04T09:00:00',
    updated_at: '2026-10-04T09:00:00',
  },
  {
    id: '7',
    title: 'Add Pagination',
    description: 'Implement pagination for the todos list.',
    status: 'pending',
    created_at: '2026-10-05T10:30:00',
    updated_at: '2026-10-05T10:30:00',
  },
  {
    id: '8',
    title: 'Test Todo Form',
    description:
      'Test required fields, validation errors, loading state, and successful submission.',
    status: 'completed',
    created_at: '2026-10-05T15:45:00',
    updated_at: '2026-10-06T09:20:00',
  },
];

export const getAllTodos = (): Promise<Todo[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
    }, 4000);
  });
};

// ===========================
export const addTodo = (user: Todo): Promise<Todo> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.id = 'user-' + (todos.length + 1);
      user.created_at = new Date().toISOString();
      todos.push(user);
      resolve(user);
    }, 4000);
  });
};
// ========================================
export const getTodoById = (id: string): Promise<Todo> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todo = todos.find((todo: Todo) => todo.id === id);
      if (todo) {
        resolve(todo);
      } else {
        reject("Todo Not Exists!!");
      }
    }, 3000);
  });
};

// ========================================
