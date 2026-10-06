import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task,TaskDocument,TaskSchema } from './schemas/product.schema.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { userInfo } from 'os';
@Injectable()
export class ProductService{
  constructor(@InjectModel(Task.name) private taskmodel:Model<TaskDocument>){}
async find(): Promise<Task[]>{
  return this.taskmodel.find();
}
async create(createproductdto:CreateProductDto):Promise<TaskDocument>{
  return this.taskmodel.create(createproductdto)
}
async productbyId(id:string){
  try {
    const Task=await this.taskmodel.findOne({id:id});
    if(!Task){
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return Task;
  } catch (error) {
    throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    
  }
}
async updatebyId(id:string,dto:CreateProductDto){
  return this.taskmodel.findOneAndUpdate({id:id},dto,{new:true});
  // async updatebyId(id:string,dto:CreateProductDto){
  // const findprod=await this.taskmodel.findOne({id:id});
  // if(!findprod){
  //   return{
  //     messege:"user not found"
  //   }
  // }
  //   findprod.name=dto.name;
  //   findprod.price=dto.price;
  //   await findprod.save();
  // }

}
}
