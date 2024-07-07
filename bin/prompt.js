export default [
	{
		name: 'dir',
		message: 'Choose your directory',
		type: 'input',
		default: './',
	},
	{
		name: 'services',
		message: 'Choose your services',
		type: 'checkbox',
		choices: ['client', 'server', 'postgresql', 'mysql', 'mongodb', 'redis', 'nginx'],
		default: ['client', 'server', 'postgresql'],
	},
]
