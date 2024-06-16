import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateTodoDto } from "~app/modules/todos/dto/create-todo.dto";
import { Todo } from "~app/modules/todos/entities/todo.entity";

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {}

    async getAll(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    async getOne(id: number): Promise<Todo | null> {
        return this.todoRepository.findOneBy({ id });
    }

    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const todo = new Todo();
        todo.title = createTodoDto.title;
        todo.description = createTodoDto.description;
        todo.isCompleted = createTodoDto["is-completed"] ?? false;

        return this.todoRepository.save(todo);
    }

    async markAsCompleted(id: number): Promise<Todo | null> {
        const todo = await this.todoRepository.findOneBy({ id });
        if (!todo) {
            return null;
        }

        todo.isCompleted = true;
        return this.todoRepository.save(todo);
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.todoRepository.delete(id);
        return (result.affected ?? 0) > 0;
    }
}
