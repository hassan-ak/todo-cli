import { Command } from "@oclif/command";
import { TodoItem } from "../todoItem";
import { TodoCollection } from "../todoCollection";
import { JsonTodoCollection } from "../jsonTodoCollection";

export default class Add extends Command {
  static description = "Add new todo to list";

  static args = [{ name: "todo" }];

  async run() {
    // List of Todos - Dummy data
    let todos: TodoItem[] = [];

    // Collection of todos
    let collection: TodoCollection = new JsonTodoCollection(todos);
    const { args } = this.parse(Add);
    const todo = args.todo;
    if (todo) {
      this.log(`[Success] Added new todo: ${todo}`);
      collection.addTodo(todo);
    } else {
      this.error("please specify the new todo");
    }
  }
}
