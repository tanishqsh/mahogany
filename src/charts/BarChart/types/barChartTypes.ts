export interface BarChartProps {
	data?: DataItem[];
	color?: string;
	width?: number | string;
	height?: number | string;
	barGap?: number;
	showAxis?: boolean;
}

export interface BarsProps {
	data: DataItem[];
	maxValue: number;
	viewBoxHeight: number;
	barWidth: number;
	gapBetweenBars: number;
	axisOffset: number;
	color: string;
	globalChartPadding: number;
}

export interface AxesProps {
	width: number;
	height: number;
	strokeColor: string;
	globalChartPadding: number;
	dashPattern?: DashPattern;
}

// data is an array of objects
export type DataItem = {
	value: number;
	label: string;
};

export enum DashPattern {
	None = 'none',
	SmallDashes = '3,3',
	LongDashes = '10,3',
	LongerDashes = '20,5',
}
