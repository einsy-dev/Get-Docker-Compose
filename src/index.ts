#! /usr/bin/env node

import * as fs from "fs";
import * as ejs from "ejs";
import * as path from "path";
import getInput from "./input";
import { Command } from "commander";
const program = new Command();

program
  .name("get-docker-compose")
  .description("Generate a docker-compose file")
  .version("1.0.0")
  .action(async () => {
    const res = await getInput();
		await write(res);
  })
  .parse();
path.resolve(__dirname, "./docker-compose.yml");

async function write({ dir, services }: any) {
  const index = fs.readFileSync(
    path.resolve(__dirname, "./template/index.yml"),
    "utf8"
  );
  const template = await services
    .map((service: string) => {
      return fs.readFileSync(
        path.resolve(__dirname, `./template/${service}.yml`),
        "utf8"
      );
    })
    .join("\n\n");

  fs.writeFileSync(
    `${dir}/docker-compose.yml`,
    ejs.render(index, { services: template }),
    "utf8"
  );
  return 1;
}
