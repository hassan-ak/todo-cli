import { Command } from "@oclif/command";
import { TodoItem } from "../todoItem";
import { TodoCollection } from "../todoCollection";
import { JsonTodoCollection } from "../jsonTodoCollection";

export default class Togglecomplete extends Command {
  static description = "Add new todo to list";

  static args = [{ name: "status" }];

  async run() {
    // List of Todos - Dummy data
    let todos: TodoItem[] = [];

    // Collection of todos
    let collection: TodoCollection = new JsonTodoCollection(todos);
    const { args } = this.parse(Togglecomplete);
    const status = args.status;
    if (status) {
      if (isNaN(status)) {
        this.error("not correct id");
      } else {
        collection.markComplete(parseInt(status), true);
        this.log(`Marked Completed`);
      }
    } else {
      this.error("please specify ID");
    }
  }
}
