const prompts = [
	// {
	// 	name: 'name',
	// 	message: 'Your Name?',
	// 	validate: function (name) {
	// 		if (!name) {
	// 			return "Name is required"
	// 		}
	// 		return true
	// 	}
	// },
	// {
	// 	name: 'bun',
	// 	message: 'Choose a bun?',
	// 	type: 'rawlist',
	// 	choices: ['Classic', 'Whole Wheat', 'Gluten Free'],
	// 	default: 'Classic'
	// },
	// {
	// 	name: 'toppings',
	// 	message: 'Choose your favourite toppings',
	// 	type: 'checkbox',
	// 	choices: ['Tomato', 'Lettuce', 'Cheese', 'Onion']
	// },
	{
		name: 'sauces',
		message: 'Choose your favourite sauces',
		type: 'checkbox',
		choices: ['Mayonnaise', 'Ketchup', 'Mustard']
	},
	{
		name: 'test',
		message: 'Choose your favourite sauces',
		type: 'checkbox',
		choices: ['Mayonnaise', 'Ketchup', 'Mustard']
	},
]
export default prompts;