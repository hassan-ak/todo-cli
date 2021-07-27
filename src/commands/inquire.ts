// Imports
import { Command, flags } from "@oclif/command";

export default class Inquire extends Command {
  // Description for the command
  static description = "Use App with user prompting other than Commands";

  // Flag defination for the command
  static flags = {
    help: flags.help({ char: "h" }),
  };

  // Command Function
  async run() {
    this.parse(Inquire);

    console.log("Hello world");
  }
}
