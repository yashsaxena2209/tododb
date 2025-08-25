import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

const validateRequest = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false, // Return all errors
      stripUnknown: true, // Remove unknown properties
    });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).json({ message: 'Validation Error', errors });
    }

    next();
  };
};

export default validateRequest;