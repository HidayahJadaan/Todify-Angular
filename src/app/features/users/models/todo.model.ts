import { ITodoType } from "./Itodo.model";

export interface Todo {
  id?: number;
  title: string;
  description: string;
  status: ITodoType;
  created_at?: string;
  updated_at?: string;
}