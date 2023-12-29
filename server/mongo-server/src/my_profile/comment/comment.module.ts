import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Comment.name, schema: CommentSchema, collection: 'comments' }],
      'mongo',
    ),
  ],
  controllers: [],
  providers: [],
})
export class CommentModule {}
