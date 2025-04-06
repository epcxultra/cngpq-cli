#!/usr/bin/env node
import { Command } from "commander";
import command_new from "./new/new";
import command_cssf from "./css_framework/cssf";

const program = new Command();

program
    .name("cng")
    .description("用于快速创建Angular项目")
    .helpOption("-h, --help", "显示帮助信息")
    .usage("[options] [command]")
    .version("0.1.0", "-V, --version", "显示版本号");

program
    .command("help [command]")
    .description("显示对应command的帮助信息");

program
    .command("new")
    .description("创建Angular项目")
    .action(() => {
        command_new();
    });

program
    .command("cssf")
    .description("添加CSS框架到Angular项目")
    .action(() => {
        command_cssf();
    });

program.parse();