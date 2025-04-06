#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
    .name("cng")
    .description("用于快速创建Angular项目，使用默认或自定义配置参数")
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

    });

program.parse();