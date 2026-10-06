import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop({ required: true, type: Number })
  userId: number;

  @Prop({ required: true, type: Number })
  id: number;

  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: Boolean })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
