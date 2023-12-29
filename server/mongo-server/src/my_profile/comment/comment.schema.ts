import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../../user/user.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({ type: mongoose.Types.ObjectId })
  _id: string;

  @Prop()
  text: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  userID: User;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
