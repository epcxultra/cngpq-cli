import { select, input } from "@inquirer/prompts";
import { execa } from "execa";

async function command_new() {

    try {
        const app_name = await input({
            message: "请输入 Angular 项目的名称",
            validate: (value: string) => value.trim() != "" || "应用名称不能为空",
        });

        const app_prefix = await input({
            message:
                "请输入组件的前缀，建议2-4个字母，这将影响在引用组件时组件的名称",
            default: "app",
        });

        const app_package_manager = await select({
            message: "请选择包管理器",
            choices: [
                { name: "npm", value: "npm" },
                { name: "pnpm", value: "pnpm" },
                { name: "yarn", value: "yarn" },
            ],
            default: "npm",
        });

        const app_css_style = await select({
            message: "请选择 CSS 预处理器",
            choices: [
                { name: "css", value: "css" },
                { name: "sass", value: "sass" },
                { name: "scss", value: "scss" },
                { name: "stylus", value: "stylus" },
            ],
            default: "npm",
        });

        const app_routing = await select({
            message: "是否添加路由",
            choices: [
                { name: "添加", value: "true" },
                { name: "不添加", value: "false" },
            ],
            default: "true",
        });

        const app_standalone = await select({
            message: "是否使用独立模式而非 ngModule",
            choices: [
                { name: "使用", value: "true" },
                { name: "不使用", value: "false" },
            ],
            default: "true",
        });

        const app_strict = await select({
            message: "是否使用严格模式",
            choices: [
                { name: "使用", value: "true" },
                { name: "不使用", value: "false" },
            ],
            default: "true",
        });

        const app_ssrssg = await select({
            message: "是否使用服务端渲染（SSR）和静态站点生成（SSG）",
            choices: [
                { name: "使用", value: "true" },
                { name: "不使用", value: "false" },
            ],
            default: "false",
        });

        const skip_git = await select({
            message: "是否跳过git初始化",
            choices: [
                { name: "跳过", value: "true" },
                { name: "不跳过", value: "false" },
            ],
            default: "false",
        });

        const skip_install = await select({
            message: "是否跳过下载依赖",
            choices: [
                { name: "跳过", value: "true" },
                { name: "不跳过", value: "false" },
            ],
            default: "false",
        });

        const skip_tests = await select({
            message: "是否跳过创建测试文件，仅影响本次操作，不影响后续的 ng g 命令",
            choices: [
                { name: "跳过", value: "true" },
                { name: "不跳过", value: "false" },
            ],
            default: "false",
        });

        const server_routing = await select({
            message: "是否启用服务器路由和应用引擎API（开发者预览）",
            choices: [
                { name: "使用", value: "true" },
                { name: "不使用", value: "false" },
            ],
            default: "false",
        });

        const ng_new =
            `ng.cmd new ${app_name} --prefix=${app_prefix} --package-manager=${app_package_manager} --style=${app_css_style} --routing=${app_routing} --standalone=${app_standalone} --strict=${app_strict} --ssr=${app_ssrssg} --skip-git=${skip_git} --skip-install=${skip_install} --skip-tests=${skip_tests} --server-routing=${server_routing}`;

        await execa(ng_new, { stdio: "inherit" });

    } catch (error: any) {
        console.log(error.message);
    }
}

export default command_new;