import { Command } from "@oclif/command";
import { TodoItem } from "../todoItem";
import { TodoCollection } from "../todoCollection";
import { JsonTodoCollection } from "../jsonTodoCollection";
import * as inquirer from "inquirer";

export default class Hidecompleted extends Command {
  static description = "describe the command here";

  async run() {
    // List of Todos - Dummy data
    let todos: TodoItem[] = [];

    // Collection of todos
    let collection: TodoCollection = new JsonTodoCollection(todos);

    // For displaying completed tasks
    let showCompleted: boolean = false;

    // Clear console
    console.clear();
    // Print Collection (Pre defined)
    console.log(
      `Todo List \nTotal : ${collection.getItemCounts().total} \tComplted : ${
        collection.getItemCounts().complete
      } \tIncomplete : ${collection.getItemCounts().incomplete}`
    );
    collection
      .getTodoItems(showCompleted)
      .forEach((item) => item.printDetails());
  }
}
