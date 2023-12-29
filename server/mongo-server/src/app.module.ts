import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './my_profile/posts/post.module';
import { CommentModule } from './my_profile/comment/comment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Vinko:Vinko_324@epidi.jazksey.mongodb.net/insight?retryWrites=true&w=majority',
      {
        connectionName: 'mongo',
      },
    ),
    PostModule,
    CommentModule,
    UserModule,
  ],
})
export class AppModule {}
