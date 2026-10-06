import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema.js';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private readonly postModel:Model<PostDocument>){}

    async importpost(){
        const res=await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts=await res.json();
        return this.postModel.insertMany(posts);
    }
    
}
