import { useEffect, useState } from 'react';
import { DataItem } from '../charts/BarChart/types/barChartTypes';

export const useChartDimensions = (data: DataItem[], width: number | string, height: number | string, barGap: number) => {
	const [dimensions, setDimensions] = useState({
		viewBoxWidth: 0,
		viewBoxHeight: 0,
		gapBetweenBars: 0,
		maxValue: 0,
		barWidth: 0,
	});

	useEffect(() => {
		const viewBoxWidth = typeof width === 'string' ? 100 : width;
		const viewBoxHeight = typeof height === 'string' ? 100 : height;
		const gapBetweenBars = ((barGap / 100) * viewBoxWidth) / data.length;
		const axisOffset = 12;
		const maxValue = Math.max(...data.map((item: DataItem) => item.value));
		const barWidth = (viewBoxWidth - axisOffset - gapBetweenBars * (data.length - 1)) / data.length;

		setDimensions({
			viewBoxWidth,
			viewBoxHeight,
			gapBetweenBars,
			maxValue,
			barWidth,
		});
	}, [data, width, height, barGap]);

	return dimensions;
};
