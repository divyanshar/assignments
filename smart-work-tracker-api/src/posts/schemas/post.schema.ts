import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PostDocument=HydratedDocument<Post>;

@Schema({timestamps:true})
export class Post{
    @Prop({
        required:true,
    })
    userId:number;
    @Prop({required:true})
    id:number;
    @Prop({required:true})
    title:string;
    @Prop({required:true})
    body:string;
}
export const PostSchema=SchemaFactory.createForClass(Post);