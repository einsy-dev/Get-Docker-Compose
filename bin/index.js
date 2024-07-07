#! /usr/bin/env node

import * as fs from 'fs';
import * as ejs from 'ejs';
import { fileURLToPath } from 'url';

import { Command } from 'commander';
import inquirer from 'inquirer';
import prompt from './prompt.js';

const program = new Command();

program
	.name('get-docker-compose')
	.description('Generate a docker-compose file')
	.version('1.0.0')
	.action(async () => {
		const answers = await inquirer.prompt(prompt);
		write(answers);
	})
	.parse();




async function write({ dir, services }) {

	const index = fs.readFileSync(fileURLToPath(new URL('./template/index.yml', import.meta.url)), 'utf8');
	const template = await services.map((service) => {
		return fs.readFileSync(fileURLToPath(new URL(`./template/${service}.yml`, import.meta.url)), 'utf8');
	}).join('\n\n');

	fs.writeFileSync(`${dir}/docker-compose.yml`, ejs.render(index, { services: template }), 'utf8');
	return 1;
}
