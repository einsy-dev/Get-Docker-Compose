#! /usr/bin/env node
import fs from "fs";
import ejs from "ejs";

import { Command } from 'commander';
import inquirer from 'inquirer';
import prompts from './prompt.js'

const program = new Command();
program
	.name('get-docker-compose')
	.description('Generate a docker-compose file')
	.version('1.0.0')
	.action(async () => {
		console.clear();
		const answers = await inquirer.prompt(prompts)
		console.log(answers)
	}).parse();

console.log('Hello, World!');

