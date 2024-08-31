import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from './users.service';
import { memberProviders } from './schema/users.providers';

@Module({
  controllers: [UsersController]
})

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UserService,
    ...memberProviders,
  ],
})
export class UsersModule {}
