import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';

import { Comment, CommentDocument } from './schemas/comment.schema.js';

@Injectable()
export class CommentsService {

  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
  ) {}

  async importComments() {

    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/comments',
    );

    const comments = response.data;

    await this.commentModel.deleteMany({});

    const result = await this.commentModel.insertMany(comments);

    return result;
  }
}