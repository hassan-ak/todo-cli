todoclitest1
============

Test App

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todoclitest1.svg)](https://npmjs.org/package/todoclitest1)
[![Downloads/week](https://img.shields.io/npm/dw/todoclitest1.svg)](https://npmjs.org/package/todoclitest1)
[![License](https://img.shields.io/npm/l/todoclitest1.svg)](https://github.com/hassan-ak/todo-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todoclitest1
$ todoclitest1 COMMAND
running command...
$ todoclitest1 (-v|--version|version)
todoclitest1/0.0.0 win32-x64 node-v12.17.0
$ todoclitest1 --help [COMMAND]
USAGE
  $ todoclitest1 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todoclitest1 hello [FILE]`](#todoclitest1-hello-file)
* [`todoclitest1 help [COMMAND]`](#todoclitest1-help-command)
* [`todoclitest1 todo [FILE]`](#todoclitest1-todo-file)

## `todoclitest1 hello [FILE]`

describe the command here

```
USAGE
  $ todoclitest1 hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ todoclitest1 hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.0/src/commands/hello.ts)_

## `todoclitest1 help [COMMAND]`

display help for todoclitest1

```
USAGE
  $ todoclitest1 help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todoclitest1 todo [FILE]`

describe the command here

```
USAGE
  $ todoclitest1 todo [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/todo.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.0/src/commands/todo.ts)_
<!-- commandsstop -->
