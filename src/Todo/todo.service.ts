import { TodoDto } from './dto';
import { Todo } from './todo.entity';
import { db } from '../fakeDB/db';
import { NotFoundException } from '@nestjs/common';
export class TodoService {
  public async findAll(): Promise<TodoDto[]> {
    return db;
  }
  public async findOne(id: number): Promise<TodoDto> {
    const todoToReturn = db.find((todo) => todo.id === +id);
    if (todoToReturn) {
      return todoToReturn;
    } else {
      throw new NotFoundException();
    }
  }
  public async add({ title, text }): Promise<TodoDto> {
    const lastId = db[db.length - 1].id;
    const newTodo = new Todo(lastId + 1, title, text);
    db.push(newTodo);
    return newTodo;
  }
  public async edit(id: number, { title, text, completed }): Promise<TodoDto> {
    const todoToUpdate = db.find((todo) => todo.id === +id);
    if (todoToUpdate) {
      todoToUpdate.title = title;
      todoToUpdate.text = text;
      if (completed !== undefined) {
        todoToUpdate.completed = completed;
      }
      return todoToUpdate;
    } else {
      throw new NotFoundException();
    }
  }
  public async remove(id: number): Promise<TodoDto> {
    const todoToPop = db.find((todo) => todo.id === +id);
    if (todoToPop) {
      db.splice(db.indexOf(todoToPop), 1);
      return todoToPop;
    } else {
      throw new NotFoundException();
    }
  }
}
