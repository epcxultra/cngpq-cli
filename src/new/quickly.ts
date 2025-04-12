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

        const app_confim = await select({
            message: `即将使用下列参数创建应用，请确认：\n应用名称：${app_name}\n组件前缀：${app_prefix}\n包管理器：NPM\n没有CSS预处理器\n添加路由Routing\nStandalone独立模式\nStrict严格模式\n没有SSR和SSG\n跳过Git初始化\n跳过下载依赖\n创建测试文件\n不使用服务器路由`,
            choices: [
                { name: '确认', value: 'true' },
                { name: '取消', value: 'false' },
            ]
        });

        switch (app_confim) {
            case 'true':
                const ng_new = `ng.cmd new ${app_name} --prefix=${app_prefix} --package-manager=npm --style=css --routing=true --standalone=true --strict=true --ssr=false --skip-git=true --skip-install=true --skip-tests=false --server-routing=false`;
                await execa(ng_new, { stdio: "inherit" });
                console.log(`\n\n项目创建完毕，请尽快执行后续命令以补全依赖`)
                console.log(`\ncd ${app_name}\n\nnpm install`)
                break;
            case 'false':
                break;
            default:
                break;
        }
    } catch (error: any) {
        console.log(error.message);
    }
}

export default new_type_quickly;