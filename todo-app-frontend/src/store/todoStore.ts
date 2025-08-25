import { create } from 'zustand';
import { ITodo, TodoForCreation, TodoForUpdate } from '../types/todo.types';
import * as api from '../services/api';
import toast from 'react-hot-toast';

interface TodoState {
  todos: ITodo[];
  loading: boolean;
  error: string | null;
  fetchTodos: () => Promise<void>;
  addTodo: (todoData: TodoForCreation) => Promise<void>;
  updateTodo: (id: string, todoData: TodoForUpdate) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  loading: true,
  error: null,

  fetchTodos: async () => {
    try {
      set({ loading: true, error: null });
      const todos = await api.getTodos();
      set({ todos, loading: false });
    } catch (err) {
      const message = 'Failed to fetch todos.';
      set({ error: message, loading: false });
      toast.error(message);
    }
  },

  addTodo: async (todoData) => {
    try {
      const newTodo = await api.createTodo(todoData);
      set((state) => ({ todos: [...state.todos, newTodo] }));
      toast.success('Task created successfully!');
    } catch (err) {
      toast.error('Failed to add todo.');
    }
  },

  updateTodo: async (id, todoData) => {
    try {
      const updatedTodo = await api.updateTodo(id, todoData);
      set((state) => ({
        todos: state.todos.map((todo) => (todo._id === id ? updatedTodo : todo)),
      }));
      toast.success('Task updated successfully!');
    } catch (err) {
      toast.error('Failed to update todo.');
    }
  },

  deleteTodo: async (id) => {
    try {
      await api.deleteTodo(id);
      set((state) => ({
        todos: state.todos.filter((todo) => todo._id !== id),
      }));
      toast.success('Task deleted successfully!');
    } catch (err) {
      toast.error('Failed to delete todo.');
    }
  },
}));