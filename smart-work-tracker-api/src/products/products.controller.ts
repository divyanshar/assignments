import { Controller, Get,Delete, Param, Query,Put, Post, Body, ParseIntPipe } from "@nestjs/common";
import { ProductService } from "./products.service.js";
import { CreateProductDto } from "./dto/create-product.dto.js";
import { UpdateProductDto } from "./dto/update-product.dto.js";
@Controller('products')
export class ProductController{
    constructor(private readonly productService:ProductService){}
    @Get('data')
    findAll(){
        return this.productService.find();
    }
    @Post()
    create(@Body() createproductdto:CreateProductDto){
        return this.productService.create(createproductdto);
    }
    @Get(':id')
    getbyId(@Param('id') id:string ){
        return this.productService.productbyId(id);
    }
    @Put(':id')
    updatebyId(@Param('id') id:string, @Body() dto: CreateProductDto ){
        return this.productService.updatebyId(id,dto);
        }

    }