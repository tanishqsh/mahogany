import { mahoganyPallete } from '../../brand/colors';

export const defaults = {
	data: [
		{
			value: Math.floor(Math.random() * 100) + 50,
			label: '1',
		},
		{
			value: Math.floor(Math.random() * 100) + 50,
			label: '2',
		},
		{
			value: Math.floor(Math.random() * 100) + 50,
			label: '3',
		},
		{
			value: Math.floor(Math.random() * 100) + 50,
			label: '4',
		},
		{
			value: Math.floor(Math.random() * 100) + 50,
			label: '5',
		},
		{
			value: Math.floor(Math.random() * 100) + 50,
			label: '6',
		},
		{
			value: Math.floor(Math.random() * 100) + 50,
			label: '7',
		},
		{
			value: Math.floor(Math.random() * 100) + 50,
			label: '8',
		},
		{
			value: Math.floor(Math.random() * 100) + 50,
			label: '9',
		},
		{
			value: Math.floor(Math.random() * 100) + 50,
			label: '10',
		},
	],
	color: mahoganyPallete[Math.floor(Math.random() * mahoganyPallete.length)],
	width: 250, // Default width
	height: 250, // Default height
	barGap: 10, // Default gap between bars
};
