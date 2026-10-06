import { Controller, Get } from "@nestjs/common";
import { PostsService } from "./posts.service.js";
@Controller('posts')
export class PostsController{
  constructor(private readonly postsService:PostsService){}

  @Get('insert')
  fetchdata(){
    return this.postsService.importpost();
  }
}