import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Todo from '../models/todoModel';
import { CustomError } from '../utils/customError';

// @desc    Get all todos
// @route   GET /api/todos
// @access  Public
export const getTodos = asyncHandler(async (req: Request, res: Response) => {
  const todos = await Todo.find({});
  res.status(200).json(todos);
});

// @desc    Get a single todo
// @route   GET /api/todos/:id
// @access  Public
export const getTodoById = asyncHandler(async (req: Request, res: Response) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    res.status(200).json(todo);
  } else {
    throw new CustomError('Todo not found', 404);
  }
});

// @desc    Create a todo
// @route   POST /api/todos
// @access  Public
export const createTodo = asyncHandler(async (req: Request, res: Response) => {
  const { title, description, dueDate, priority, tags, subtasks } = req.body;

  const todo = new Todo({
    title,
    description,
    dueDate,
    priority,
    tags,
    subtasks,
  });

  const createdTodo = await todo.save();
  res.status(201).json(createdTodo);
});

// @desc    Update a todo
// @route   PUT /api/todos/:id
// @access  Public
export const updateTodo = asyncHandler(async (req: Request, res: Response) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    // Update fields from req.body
    Object.assign(todo, req.body);
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } else {
    throw new CustomError('Todo not found', 404);
  }
});

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
// @access  Public
export const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    await todo.deleteOne();
    res.status(200).json({ message: 'Todo removed' });
  } else {
    throw new CustomError('Todo not found', 404);
  }
});