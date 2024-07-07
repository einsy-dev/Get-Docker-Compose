#! /usr/bin/env node

import { read, write, indexInsert } from "./fs";
import getInput from "./input";

import { Command } from "commander";
const program = new Command();

program
  .name("get-docker-compose")
  .description("Generate a docker-compose file")
  .version("1.0.0")
  .action(async () => {
    const { dir, services } = await getInput();
    const template = await services
      .map((service: string) => {
        return read(`./template/${service}.yml`);
      })
      .join("\n\n");
    write(`${dir}/docker-compose.yml`, indexInsert("services:", template));
  })
  .parse();
