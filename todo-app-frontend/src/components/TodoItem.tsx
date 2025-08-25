import React from 'react';
import { ITodo } from '../types/todo.types';
import { ListItem, ListItemText, IconButton, Checkbox, Chip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTodoStore } from '../store/todoStore';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const handleToggleComplete = (completed: boolean) => {
    updateTodo(todo._id, { completed });
  };

  const priorityColors = {
    high: 'error',
    medium: 'warning',
    low: 'success',
  } as const;

  return (
    <ListItem
      sx={{ bgcolor: 'background.paper', mb: 1, borderRadius: 1, boxShadow: 1 }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo._id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        edge="start"
        checked={todo.completed}
        onChange={(e) => handleToggleComplete(e.target.checked)}
      />
      <ListItemText
        primary={
          <Typography sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </Typography>
        }
      />
      <Chip label={todo.priority} color={priorityColors[todo.priority]} size="small" />
    </ListItem>
  );
};

export default TodoItem;