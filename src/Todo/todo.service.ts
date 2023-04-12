import { AddTodoDto, EditTodoDto, TodoDto } from './dto';
import { Todo } from './todo.entity';
import { db } from '../fakeDB/db';
export class TodoService {
  public async findAll(): Promise<TodoDto[]> {
    return db;
  }
  public async findOne(id: number): Promise<TodoDto> {
    return db.find((todo) => todo.id === +id);
  }
  public async add({ title, text }: AddTodoDto): Promise<TodoDto> {
    const lastId = db[db.length - 1].id;
    const newTodo = new Todo(lastId + 1, title, text);
    db.push(newTodo);
    return db[db.length - 1];
  }
  public async edit(
    id: number,
    { title, completed }: EditTodoDto,
  ): Promise<TodoDto> {
    return;
  }
  public async remove(id: number): Promise<TodoDto> {
    return;
  }
}
