import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from '../users/schemas/user.schema.js';
import { Post, PostDocument } from '../posts/schemas/post.schema.js';
import { Todo, TodoDocument } from '../todos/schemas/todo.schema.js';
import { Comment, CommentDocument } from '../comments/schemas/comment.schema.js';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(Post.name)
    private readonly postModel: Model<PostDocument>,
    @InjectModel(Todo.name)
    private readonly todoModel: Model<TodoDocument>,
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
  ) {}

  // async getcompletedtodo(){
  //   return await this.todoModel.aggregate([
  //     {
  //       $group:{
  //         _id:'$completed',
  //         total:{
  //           $sum:1,
  //         },
  //       },
  //     },
  //     {
  //       $project:{
  //         _id:0,
  //         completed:"$_id",
  //         total:1
  //       }
  //     }
  //   ]);
  // }

//PART-A
  async getUsersCount() {
    return this.userModel.aggregate([
      {
        $count: 'totalUsers',
      },
    ]);
  }


  async getPostsCount() {
    return this.postModel.aggregate([
      {
        $count: 'totalPosts',
      },
    ]);
  }


  async getCommentsCount() {
    return this.commentModel.aggregate([
      {
        $count: 'totalComments',
      },
    ]);
  }


  async getTodosCount() {
    return this.todoModel.aggregate([
      {
        $count: 'totalTodos',
      },  
    ]);
  }

  async getUserPostStats() {
    return this.postModel.aggregate([
      // {
      //   $group: {
      //     _id: '$userId',
      //     totalPosts: {$sum: 1},
      //   },
      // },
      {
        $group:{
          _id:"$userId",
          total:{$sum:1}
        },

      },
      {
        $sort:{

        }
      }
    ]);
  }


  async getUserTodoStats() {
    return this.todoModel.aggregate([
      {
        $group: {
          _id: '$userId',
          totalTodos: {
            $sum: 1,
          },
        },
      },
    ]);
  }

  async gettodostatus(){
    return await this.todoModel.aggregate(
      [
        {
          $group:{
            _id:'$completed',
            total:{
              $sum:1
            }
          }
        },
        {
          $project:{
            _id:0,
            completed:'$_id',
            total:1
          }
        }
      ]
    )
  }
  // async getTodoCompletionStats() {
  //   return this.todoModel.aggregate([
  //     {
  //       $group: {
  //         _id: '$completed',
  //         total: {
  //           $sum: 1,
  //         },
  //       },
  //     },
  //   ]);
  // }

//   async getUserWisePostStats() {
//     return this.postModel.aggregate([
//       {
//         $lookup: {
//           from: 'users',
//           localField: 'userId',
//           foreignField: 'id',
//           as: 'user',
//         },
//       },
//       {
//         $unwind: '$user',
//       },
//       {
//         $group: {
//           _id: '$userId',
//           userName: {
//             $first: '$user.name',
//           },
//           totalPosts: {
//             $sum: 1,
//           },
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           userId: '$_id',
//           userName: 1,
//           totalPosts: 1,
//         },
//       },
//       {
//         $sort: {
//           totalPosts: -1,
//         },
//       },
//     ]);
//   }

//   async getUserWiseTodoStats() {
//     return this.todoModel.aggregate([
//       {
//         $lookup: {
//           from: 'users',
//           localField: 'userId',
//           foreignField: 'id',
//           as: 'user',
//         },
//       },
//       {
//         $unwind: '$user',
//       },
//       {
//         $group: {
//           _id: '$userId',
//           userName: {
//             $first: '$user.name',
//           },
//           totalTodos: {
//             $sum: 1,
//           },
//           completedTodos: {
//             $sum: {
//               $cond: ['$completed', 1, 0],
//             },
//           },
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           userId: '$_id',
//           userName: 1,
//           totalTodos: 1,
//           completedTodos: 1,
//         },
//       },
//       {
//         $sort: {
//           totalTodos: -1,
//         },
//       },
//     ]);
//   }


}