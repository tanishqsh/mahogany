import { mahoganyPallete } from '../../brand/colors';

export const defaults = {
	data: [
		{
			value: Math.floor(Math.random() * 500) + 50,
			label: 'Label 1',
		},
		{
			value: Math.floor(Math.random() * 500) + 50,
			label: 'Label 2',
		},
		{
			value: Math.floor(Math.random() * 500) + 50,
			label: 'Label 3',
		},
		{
			value: Math.floor(Math.random() * 500) + 50,
			label: 'Label 4',
		},
		{
			value: Math.floor(Math.random() * 500) + 50,
			label: 'Label 5',
		},
		{
			value: Math.floor(Math.random() * 500) + 50,
			label: 'Label 6',
		},
		{
			value: Math.floor(Math.random() * 500) + 50,
			label: 'Label 7',
		},
		{
			value: Math.floor(Math.random() * 500) + 50,
			label: 'Label 8',
		},
		{
			value: Math.floor(Math.random() * 500) + 50,
			label: 'Label 9',
		},
		{
			value: Math.floor(Math.random() * 500) + 50,
			label: 'Label 10',
		},
	],
	color: mahoganyPallete[Math.floor(Math.random() * mahoganyPallete.length)],
	width: 600, // Default width
	height: 500, // Default height
	barGap: 4, // Default gap between bars
	showAxis: true, // Default show axis
};
