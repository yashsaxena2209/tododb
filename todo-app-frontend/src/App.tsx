import React, { useEffect } from 'react';
import { Container, Typography, CssBaseline, Box, CircularProgress } from '@mui/material';
import { useTodoStore } from './store/todoStore';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { Toaster } from 'react-hot-toast';

function App() {
  const fetchTodos = useTodoStore((state) => state.fetchTodos);
  const loading = useTodoStore((state) => state.loading);
  const error = useTodoStore((state) => state.error);

  useEffect(() => {
    fetchTodos();
  }, []); // This is correct and will only run once.

  return (
    <>
      <CssBaseline />
      <Toaster position="bottom-center" />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Simple To-Do List
          </Typography>

          <AddTodoForm />

          {/* The filter and sort controls are now removed */}

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography color="error" align="center">{error}</Typography>
          ) : (
            <TodoList />
          )}
        </Box>
      </Container>
    </>
  );
}

export default App;