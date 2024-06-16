import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Todo } from "~app/modules/todos/entities/todo.entity";
import { TodosController } from "~app/modules/todos/todos.controller";
import { TodosService } from "~app/modules/todos/todos.service";

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    controllers: [TodosController],
    providers: [TodosService],
})
export class TodosModule {}
