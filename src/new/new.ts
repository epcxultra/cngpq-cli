import { select } from "@inquirer/prompts";
import new_type_step_by_step from "./step_by_step";
import new_type_quickly from "./quickly";

async function command_new() {

    try {
        const choice_new_type = await select({
            message: "请选择创建 Angular 项目的方式",
            choices: [
                { name: "快速创建", value: "quickly" },
                { name: "步进式创建", value: "sbs" },
            ]
        });

        switch (choice_new_type) {
            case "quickly":
                new_type_quickly();
                break;
            case "sbs":
                new_type_step_by_step();
                break;
            default:
                console.log("未知的创建方式，请重新选择");
                break;
        }
    } catch (error: any) {
        console.log(error.message);
    }
}

export default command_new;