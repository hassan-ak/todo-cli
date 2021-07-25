# todo-cli-hassan

Project 02 BootCamp 2021: Todo CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo-cli-hassan.svg)](https://npmjs.org/package/todo-cli-hassan)
[![Downloads/week](https://img.shields.io/npm/dw/todo-cli-hassan.svg)](https://npmjs.org/package/todo-cli-hassan)
[![License](https://img.shields.io/npm/l/todo-cli-hassan.svg)](https://github.com/hassan-ak/todo-cli/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g todo-cli-hassan
$ todo COMMAND
running command...
$ todo (-v|--version|version)
todo-cli-hassan/0.0.0 win32-x64 node-v12.17.0
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`todo hello [FILE]`](#todo-hello-file)
- [`todo help [COMMAND]`](#todo-help-command)

## `todo hello [FILE]`

describe the command here

```
USAGE
  $ todo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ todo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.0/src/commands/hello.ts)_

## `todo help [COMMAND]`

display help for todo

```
USAGE
  $ todo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

<!-- commandsstop -->
