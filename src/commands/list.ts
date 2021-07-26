// imports
import { Command, flags } from "@oclif/command";
import { TodoItem } from "../dataModels/todoItem";
import { TodoCollection } from "../dataModels/todoCollection";
import { JsonTodoCollection } from "../dataModels/jsonTodoCollection";
import Table = require("cli-table");
import chalk = require("chalk");

export default class List extends Command {
  // Description for the command
  static description = "Display list of all todos";

  // Flag defination for the command
  static flags = {
    help: flags.help({ char: "h" }),
  };

  // Command Function
  async run() {
    this.parse(List);

    // list of todos and in case there is no data in Json file and collection of todos
    let todos: TodoItem[] = [];
    let collection: TodoCollection = new JsonTodoCollection(todos);

    // Title
    console.log(chalk.bgMagentaBright("Todo List"));

    // Initilize table
    const table1 = new Table({
      // Table Heading
      head: [
        chalk.blueBright("Id"),
        chalk.blueBright("Todo"),
        chalk.blueBright("Completed"),
      ],
    });
    // Check if there are any todos in the storage
    // If no todos in the list
    if (collection.getItemCounts().total == 0) {
      table1.push(["---", "There is no Todo in the List", "---"]);
    }
    // if todos in the list
    else {
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
    // Display table
    this.log(table1.toString());
  }
}
