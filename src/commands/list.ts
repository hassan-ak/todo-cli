import { Command, flags } from "@oclif/command";
import { TodoItem } from "../dataModels/todoItem";
import { TodoCollection } from "../dataModels/todoCollection";
import { JsonTodoCollection } from "../dataModels/jsonTodoCollection";
import Table = require("cli-table");
import chalk = require("chalk");

export default class List extends Command {
  static description = "Display list of todos";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    this.parse(List);

    // list of todos and in case there is no data in Json file, use an empty or dummy data
    let todos: TodoItem[] = [];

    // Collection of todos
    let collection: TodoCollection = new JsonTodoCollection(todos);

    console.log(chalk.bgMagentaBright("Todo List"));

    const table1 = new Table({
      head: [
        chalk.blueBright("Id"),
        chalk.blueBright("Todo"),
        chalk.blueBright("Completed"),
      ],
    });
    if (collection.getItemCounts().total == 0) {
      table1.push(["---", "There is no Todo in the List", "---"]);
    } else {
      collection
        .getTodoItems(true)
        .forEach((item) =>
          table1.push([
            item.id,
            item.task,
            item.complete ? chalk.green("Yes") : chalk.red("No"),
          ])
        );
    }
    this.log(table1.toString());
  }
}
