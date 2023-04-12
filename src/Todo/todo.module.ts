import { TodoController } from './todo.controller';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
