import { Controller, Post } from '@nestjs/common';
import { CommentsService } from './comments.service.js';

@Controller('comments')
export class CommentsController {

  constructor(
    private readonly commentsService: CommentsService,
  ) {}

  @Post('import')
  importComments() {
    return this.commentsService.importComments();
  }
}