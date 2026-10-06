import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument=HydratedDocument<User>
@Schema()
export class User{
    @Prop({reuired:true})
    id:number;

    @Prop({reuired:true})
    name:string;

    @Prop({reuired:true})
    username:string;

    @Prop({reuired:true})
    email:string;
}
export const UserSchema=SchemaFactory.createForClass(User);