import { TodoDto } from './dto';
import { TodoService } from './todo.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Body,
  Delete,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  public constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Found todo',
    type: [TodoDto],
  })
  public findAll(): Promise<TodoDto[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: number): Promise<TodoDto> {
    return this.todoService.findOne(id);
  }

  @Put(':id')
  public edit(
    @Param('id') id: number,
    @Body() todo: { title: string; text: string; completed: boolean },
  ): Promise<TodoDto> {
    return this.todoService.edit(id, todo);
  }

  @Post()
  public add(@Body() todo: { title: string; text: string }): Promise<TodoDto> {
    return this.todoService.add(todo);
  }

  @Delete(':id')
  public remove(@Param('id') id: number): Promise<TodoDto> {
    return this.todoService.remove(id);
  }
}
