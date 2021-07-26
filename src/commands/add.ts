import { Command, flags } from "@oclif/command";
import { JsonTodoCollection } from "../dataModels/jsonTodoCollection";
import { TodoCollection } from "../dataModels/todoCollection";
import { TodoItem } from "../dataModels/todoItem";
import chalk = require("chalk");

export default class Add extends Command {
  static description = "Add new todo to list";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "todo" }];

  async run() {
    let todos: TodoItem[] = [];

    // Collection of todos
    let collection: TodoCollection = new JsonTodoCollection(todos);
    const { args } = this.parse(Add);
    const todo = args.todo;
    if (todo) {
      this.log(
        chalk.green("[Success]"),
        "Added new todo:",
        chalk.blue(`${todo}`)
      );
      collection.addTodo(todo);
    } else {
      this.error(chalk.red("Please specify the new todo"));
    }
  }
}
