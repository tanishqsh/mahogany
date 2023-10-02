export interface BarChartProps {
	data?: DataItem[];
	color?: string;
	width?: number | string;
	height?: number | string;
	barGap?: number;
}

// data is an array of objects
export type DataItem = {
	value: number;
	label: string;
};
