import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: mongoose.Types.ObjectId })
  _id: string;

  @Prop()
  username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
