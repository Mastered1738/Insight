import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name, 'mongo')
    private readonly commentModel: Model<Comment>,
  ) {}

  async findAllComments(): Promise<Comment[]> {
    return this.commentModel.find();
  }
}
