import Joi from 'joi';

const subtaskSchema = Joi.object({
  title: Joi.string().trim().min(1).required(),
  completed: Joi.boolean().default(false),
});

export const createTodoSchema = Joi.object({
  title: Joi.string().trim().min(1).required().messages({
    'string.empty': 'Title is required.',
    'any.required': 'Title is required.',
  }),
  description: Joi.string().trim().allow('').optional(),
  dueDate: Joi.date().iso().optional(),
  priority: Joi.string().valid('low', 'medium', 'high').default('medium'),
  tags: Joi.array().items(Joi.string().trim()).optional(),
  subtasks: Joi.array().items(subtaskSchema).optional(),
});

export const updateTodoSchema = Joi.object({
  title: Joi.string().trim().min(1).optional(),
  description: Joi.string().trim().allow('').optional(),
  completed: Joi.boolean().optional(),
  dueDate: Joi.date().iso().allow(null).optional(),
  priority: Joi.string().valid('low', 'medium', 'high').optional(),
  tags: Joi.array().items(Joi.string().trim()).optional(),
  subtasks: Joi.array().items(subtaskSchema).optional(),
}).min(1).messages({ // At least one field must be provided for an update
    'object.min': 'At least one field is required to update a todo.'
});