import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {

  @Prop({ required: true, type: Number })
  postId: number;

  @Prop({ required: true, type: Number })
  id: number;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  body: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);