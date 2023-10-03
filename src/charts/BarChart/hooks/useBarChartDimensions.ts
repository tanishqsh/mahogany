import { useMemo } from 'react';
import { DataItem } from '../barChartTypes';

export const useBarChartDimensions = (data: DataItem[], width: number | string, height: number | string, barGap: number) => {
	const dimensions = useMemo(() => {
		/** This is the padding we want on all 4 sides of the viewbox. */
		let globalChartPadding: number = 10;

		const viewBoxWidth = typeof width === 'string' ? (isNaN(parseInt(width)) ? 500 : parseInt(width)) : width;
		const viewBoxHeight = typeof height === 'string' ? (isNaN(parseInt(height)) ? 500 : parseInt(height)) : height;

		const gapBetweenBars = 12;
		const axisOffset = gapBetweenBars;

		const maxValue = Math.max(...data.map((item: DataItem) => item.value));
		const barWidth = (viewBoxWidth - axisOffset - globalChartPadding - gapBetweenBars * data.length) / data.length;

		return {
			viewBoxWidth,
			viewBoxHeight,
			gapBetweenBars,
			axisOffset,
			maxValue,
			barWidth,
			globalChartPadding,
		};
	}, [data, width, height, barGap]);

	return dimensions;
};
