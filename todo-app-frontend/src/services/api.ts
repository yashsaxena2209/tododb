import axios from 'axios';
import { ITodo, TodoForCreation, TodoForUpdate } from '../types/todo.types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/todos';

const api = axios.create({
  baseURL: API_URL,
});

export const getTodos = async (): Promise<ITodo[]> => {
  const response = await api.get('/');
  return response.data;
};

export const createTodo = async (todoData: TodoForCreation): Promise<ITodo> => {
  const response = await api.post('/', todoData);
  return response.data;
};

export const updateTodo = async (id: string, todoData: TodoForUpdate): Promise<ITodo> => {
  const response = await api.put(`/${id}`, todoData);
  return response.data;
};

export const deleteTodo = async (id: string): Promise<{ message: string }> => {
  const response = await api.delete(`/${id}`);
  return response.data;
};