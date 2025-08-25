import express from 'express';
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todoController';
import validateRequest from '../middleware/validateRequest';
import { createTodoSchema, updateTodoSchema } from '../validation/todoValidation';

const router = express.Router();

router.route('/')
  .get(getTodos)
  .post(validateRequest(createTodoSchema), createTodo);

router.route('/:id')
  .get(getTodoById)
  .put(validateRequest(updateTodoSchema), updateTodo)
  .delete(deleteTodo);

export default router;