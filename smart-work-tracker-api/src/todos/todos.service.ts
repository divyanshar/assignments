import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';

import { Todo, TodoDocument } from './schemas/todo.schema.js';

@Injectable()
export class TodosService {

  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<TodoDocument>,
  ) {}

  async importTodos() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    const todos = response.data;
    await this.todoModel.deleteMany({});
    const result = await this.todoModel.insertMany(todos);
    return result;
  }
}