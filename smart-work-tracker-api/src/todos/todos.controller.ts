import { Controller, Post } from '@nestjs/common';
import { TodosService } from './todos.service.js';

@Controller('todos')
export class TodosController {

  constructor(
    private readonly todosService: TodosService,
  ) {}

  @Post('import')
  importTodos() {
    return this.todosService.importTodos();
  }
}