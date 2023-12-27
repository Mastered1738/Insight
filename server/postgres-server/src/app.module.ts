import { Module } from '@nestjs/common';
import { PostgresModule } from 'database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PostgresModule],
})
export class AppModule {}
