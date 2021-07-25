import { Command } from "@oclif/command";
import { TodoItem } from "../todoItem";
import { TodoCollection } from "../todoCollection";
import { JsonTodoCollection } from "../jsonTodoCollection";
import * as inquirer from "inquirer";

export default class Show extends Command {
  static description = "describe the command here";

  async run() {
    // List of Todos - Dummy data
    let todos: TodoItem[] = [];

    // Collection of todos
    let collection: TodoCollection = new JsonTodoCollection(todos);

    // Clear console
    console.clear();
    // Print Collection (Pre defined)
    collection.removeComplete();
    console.log("*** Completed Tasks Removed ***");
    console.log(
      `Todo List \nTotal : ${collection.getItemCounts().total} \tComplted : ${
        collection.getItemCounts().complete
      } \tIncomplete : ${collection.getItemCounts().incomplete}`
    );
    collection.printAll();
  }
}
