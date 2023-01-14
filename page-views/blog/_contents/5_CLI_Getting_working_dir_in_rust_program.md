---
title: "Small bet"
description: "Get the current working dir in Rust"
date: "2023-01-15"
introduction: "Detect current working folder when run ylambda cli in any folder"
---

yLambda CLI will be installed in the developer machine where they can run it in any terminal directory.  

> In Window, the installed folder is usually stored in `%USERPROFILE%/.ylambda`, and this folder should be included in the environment variable `PATH`

> In Linux, there should be `$HOME/.ylambda` and this path should be included in the environment `PATH`.

Assuming that ylambda has been installed in the developer machine, then in any folder, they can run this command:

```bash
$ ylambda app create simple-api --lang c#
```
Then, ylambda will create a TOML configuration file `ylambda.toml` in the current working folder. So how do we get the working folder in Rust?

## Working directory in Rust

There is a standard library to support us get a working directory in rust. Here is a code sample

```rust
use std::env::current_dir;

fn main() {
    match current_dir() {
        Ok(path) => {
            let working_dir_path = path.to_str().unwrap();
            println!("Working Dir is {working_dir_path}")
        }
        Err(error) => {
            println!("Cannot get current working directory. Error {error}")
        }
    }
}

```

A sample code above will use `std::env::current_dir` and print out to the terminal.

Let's build this program and copy execute file into %USERPROFILE%/.ylambda, you have to make sure the `Path` environment variable included that path, you can test this by using command on Window 

```bash
set 
...
OS=Windows_NT
Path=....
...
```
You should expect `%USERPROFILE%/.ylambda` shown in `Path` variable.

At this point, you can run the command in any folder and it will show you the working directory that you are in.

```bash
PS C:\Users\sangc> ylambda
Working Dir is C:\Users\sangc
PS C:\Users\sangc> cd .dotnet       <--Change to .dotnet folder
PS C:\Users\sangc\.dotnet> ylambda
Working Dir is C:\Users\sangc\.dotnet
```

So in any folder, we also get the working directory and from now we can easily create `ylambda.toml` in the working directory of the user.

Happy coding!

