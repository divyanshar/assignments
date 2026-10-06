import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service.js';

@Controller('analytics')
export class AnalyticsController {
  constructor(
    private readonly analyticsService: AnalyticsService,
  ) {}

  @Get('users')
  getUsersCount() {
    return this.analyticsService.getUsersCount();
  }

  @Get('posts')
  getPostsCount() {
    return this.analyticsService.getPostsCount();
  }

  @Get('todos')
  getTodosCount() {
    return this.analyticsService.getTodosCount();
  }

  @Get('user-posts')
  getUserPostStats() {
    return this.analyticsService.getUserPostStats();
  }

  @Get('user-todos')
  getUserTodoStats() {
    return this.analyticsService.getUserTodoStats();
  }
  @Get('todo-status')
    gettodostatus(){
      return this.analyticsService.gettodostatus();
    }
  }
