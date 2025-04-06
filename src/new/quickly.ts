import { select, input } from "@inquirer/prompts";
import { execa } from "execa";

async function new_type_quickly() {
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

        const ng_new =
            `ng.cmd new ${app_name} --prefix=${app_prefix} --package-manager=npm --style=css --routing=true --standalone=true --strict=true --ssr=false --skip-git=true --skip-install=true --skip-tests=false --server-routing=false`;

        await execa(ng_new, { stdio: "inherit" });

    } catch (error: any) {
        console.log(error.message);
    }
}

export default new_type_quickly;