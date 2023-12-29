import * as mongoose from 'mongoose';
import { Comment } from '../comment/comment.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/user/user.schema';

export type PostDocumet = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ type: mongoose.Types.ObjectId })
  _id: string;

  @Prop({ type: String })
  file: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  userID: User;

  @Prop({ type: Number })
  numberOfLikes: number;

  @Prop({ type: Number })
  numberOfComments: number;

  @Prop([Comment])
  comments: Comment[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
