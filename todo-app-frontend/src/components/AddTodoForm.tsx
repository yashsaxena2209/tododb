import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { TodoForCreation } from '../types/todo.types';
import { useTodoStore } from '../store/todoStore';
import toast from 'react-hot-toast'; // <-- CORRECTED: IMPORT ADDED

const AddTodoForm = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Title cannot be empty.");
      return;
    }
    const newTodo: TodoForCreation = { title, priority };
    addTodo(newTodo);
    setTitle('');
    setPriority('medium');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 4 }}>
      <TextField
        label="New Todo Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          label="Priority"
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" sx={{ py: 1.8 }}>
        Add
      </Button>
    </Box>
  );
};

export default AddTodoForm;