import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name, 'mongo') private readonly postModel: Model<Post>,
  ) {}

  async findAllPosts(): Promise<Post[]> {
    return this.postModel.find();
  }
}
