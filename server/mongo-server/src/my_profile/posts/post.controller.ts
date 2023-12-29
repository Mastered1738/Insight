import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from './post.schema';

@Controller('/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/getAll')
  async getAllPosts(): Promise<Post[]> {
    return this.postService.findAllPosts();
  }
}
