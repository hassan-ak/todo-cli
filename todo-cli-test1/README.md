todo-cli-test1
==============

Todo CLI App testing

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo-cli-test1.svg)](https://npmjs.org/package/todo-cli-test1)
[![Downloads/week](https://img.shields.io/npm/dw/todo-cli-test1.svg)](https://npmjs.org/package/todo-cli-test1)
[![License](https://img.shields.io/npm/l/todo-cli-test1.svg)](https://github.com/hassan-ak/todo-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todo-cli-test1
$ todo-cli-test1 COMMAND
running command...
$ todo-cli-test1 (-v|--version|version)
todo-cli-test1/0.0.0 win32-x64 node-v12.17.0
$ todo-cli-test1 --help [COMMAND]
USAGE
  $ todo-cli-test1 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo-cli-test1 hello [FILE]`](#todo-cli-test1-hello-file)
* [`todo-cli-test1 help [COMMAND]`](#todo-cli-test1-help-command)

## `todo-cli-test1 hello [FILE]`

describe the command here

```
USAGE
  $ todo-cli-test1 hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ todo-cli-test1 hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.0/src/commands/hello.ts)_

## `todo-cli-test1 help [COMMAND]`

display help for todo-cli-test1

```
USAGE
  $ todo-cli-test1 help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
