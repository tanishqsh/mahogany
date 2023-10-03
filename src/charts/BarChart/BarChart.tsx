import '../../tailwind.min.css';
import React, { FC } from 'react';
import { BarChartProps } from './barChartTypes';
import { defaults } from './defaults';
import { lightenColor } from '../../lib-utils/fx';
import { Axes } from './Axes';
import Bars from './Bar';
import { useBarChartDimensions } from './hooks/useBarChartDimensions';

const BarChart: FC<BarChartProps> = ({
	data = defaults.data,
	color = defaults.color,
	width = defaults.width,
	height = defaults.height,
	barGap = defaults.barGap,
	showAxis = defaults.showAxis,
}) => {
	const { viewBoxWidth, viewBoxHeight, gapBetweenBars, axisOffset, maxValue, barWidth, globalChartPadding } = useBarChartDimensions(
		data,
		width,
		height,
		barGap
	);
	const axisStrokeColor = lightenColor(color, 10);

	return (
		<svg width={width} height={height} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
			{showAxis && <Axes width={viewBoxWidth} height={viewBoxHeight} strokeColor={axisStrokeColor} globalChartPadding={globalChartPadding} />}
			<Bars
				globalChartPadding={globalChartPadding}
				data={data}
				maxValue={maxValue}
				viewBoxHeight={viewBoxHeight}
				barWidth={barWidth}
				gapBetweenBars={gapBetweenBars}
				axisOffset={axisOffset}
				color={color}
			/>
		</svg>
	);
};

export default BarChart;
