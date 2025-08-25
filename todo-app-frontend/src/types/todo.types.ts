export interface ITodo {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  tags?: string[];
  subtasks: {
    _id?: string;
    title: string;
    completed: boolean;
  }[];
  createdAt: string;
  updatedAt: string;
}

export type TodoForCreation = Pick<ITodo, 'title' | 'priority'>;
export type TodoForUpdate = Partial<Omit<ITodo, '_id' | 'createdAt' | 'updatedAt'>>;