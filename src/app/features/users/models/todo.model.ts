import { ITodoType } from "./Itodo.model";

export interface Todo {
  id?: string;
  title: string;
  description: string;
  status: ITodoType;
  created_at?: string;
  updated_at?: string;
}