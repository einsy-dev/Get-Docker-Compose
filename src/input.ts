import { input, checkbox } from "@inquirer/prompts";

async function getInput(): Promise<{ dir: string; services: string[] }> {
  let result = { dir: "", services: [] };
  result.dir = await input({
    message: "Choose your directory",
    default: "./"
  });
  result.services = await checkbox({
    message: "Choose your services",
    choices: [
      { name: "client", value: "client" },
      { name: "server", value: "server" },
      { name: "postgresql", value: "postgresql" },
      { name: "mysql", value: "mysql" },
      { name: "mongodb", value: "mongodb" },
      { name: "redis", value: "redis" },
      { name: "nginx", value: "nginx" }
    ] as never
  });
  return result;
}
export default getInput;
