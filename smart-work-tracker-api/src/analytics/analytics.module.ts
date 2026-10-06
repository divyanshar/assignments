// import { Module } from '@nestjs/common';
// import { AnalyticsService } from './analytics.service.js';
// import { AnalyticsController } from './analytics.controller.js';
// import { MongooseModule } from '@nestjs/mongoose';
// import { User, UserSchema } from '../users/schemas/user.schema.js';

// @Module({
//   imports:[MongooseModule.forFeature([{
//     name:User.name,
//     schema:UserSchema
//   }])],
//   controllers: [AnalyticsController],
//   providers: [AnalyticsService],
// })
// export class AnalyticsModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AnalyticsController } from './analytics.controller.js';
import { AnalyticsService } from './analytics.service.js';

import { User, UserSchema } from '../users/schemas/user.schema.js';
import { Post,PostSchema } from '../posts/schemas/post.schema.js';
import { Todo, TodoSchema } from '../todos/schemas/todo.schema.js';
import { Comment, CommentSchema } from '../comments/schemas/comment.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Post.name,
        schema: PostSchema,
      },
      {
        name: Todo.name,
        schema: TodoSchema,
      },
      {
        name: Comment.name,
        schema: CommentSchema,
      },
    ]),
  ],

  controllers: [AnalyticsController],

  providers: [AnalyticsService],
})
export class AnalyticsModule {}