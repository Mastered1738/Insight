import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getAll')
  async getAllPosts(): Promise<User[]> {
    return this.userService.findAllUsers();
  }
}
