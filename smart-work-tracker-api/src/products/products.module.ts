import { Module } from '@nestjs/common';
import { ProductController } from './products.controller.js';
import { ProductService } from './products.service.js';
import { MongooseModule } from '@nestjs/mongoose'; 
import { Task, TaskSchema } from './schemas/product.schema.js';
@Module({
    providers:[ProductService],
    controllers:[ProductController],
    imports:[MongooseModule.forFeature([{
        name:Task.name,
        schema:TaskSchema,
    }])]
})
export class ProductsModule {}
