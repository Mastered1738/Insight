import { Controller, Get } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.schema';

@Controller('/comment')
export class PostController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/getAll')
  async getAllPosts(): Promise<Comment[]> {
    return this.commentService.findAllComments();
  }
}
