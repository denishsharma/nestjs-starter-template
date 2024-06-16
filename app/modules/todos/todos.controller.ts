import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";

import { CreateTodoDto } from "~app/modules/todos/dto/create-todo.dto";
import { Todo } from "~app/modules/todos/entities/todo.entity";
import { TodosService } from "~app/modules/todos/todos.service";

@Controller("todos")
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Post()
    create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todosService.create(createTodoDto);
    }

    @Post(":id/complete")
    complete(@Param("id", ParseIntPipe) id: number): Promise<Todo | null> {
        return this.todosService.markAsCompleted(id);
    }

    @Get()
    getAll(): Promise<Todo[]> {
        return this.todosService.getAll();
    }

    @Get(":id")
    getOne(@Param("id", ParseIntPipe) id: number): Promise<Todo | null> {
        return this.todosService.getOne(id);
    }

    @Delete(":id")
    delete(@Param("id", ParseIntPipe) id: number): Promise<boolean> {
        return this.todosService.delete(id);
    }
}
