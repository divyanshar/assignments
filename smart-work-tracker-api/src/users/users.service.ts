import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto.js';
// import { UpdateUserDto } from './dto/update-user.dto.js';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument, UserSchema } from './schemas/user.schema.js';
import { Model } from 'mongoose';
import axios, { Axios } from 'axios';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel:Model<UserDocument> ){}

  async fetchuser(){
    try {
      const res=await axios.get('https://jsonplaceholder.typicode.com/users');
      const users = res.data;
      const result=await this.userModel.insertMany(users);
      return result;
    } catch (error) {
      throw new Error('Failed to fetch users');
      
    }
  }
}