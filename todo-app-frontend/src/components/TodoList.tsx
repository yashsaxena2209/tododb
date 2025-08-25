import React from 'react';
import { ITodo } from '../types/todo.types';
import TodoItem from './TodoItem';
import { List, Typography, Box } from '@mui/material';
import { useTodoStore } from '../store/todoStore'; // <-- CORRECTED: IMPORT ADDED

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) {
    return (
      <Box textAlign="center" my={5}>
        <Typography variant="h6" color="text.secondary">
          No tasks yet. Add one to get started!
        </Typography>
      </Box>
    );
  }

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;