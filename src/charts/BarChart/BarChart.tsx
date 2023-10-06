import '../../tailwind.min.css';
import React, { FC } from 'react';
import { BarChartProps } from './types/barChartTypes';
import { defaults } from './defaults';
import { lightenColor } from '../../lib-utils/fx';
import { Axes } from './elements/Axes';
import Bars from './elements/Bar';
import { useBarChartDimensions } from './hooks/useBarChartDimensions';
import { motion } from 'framer-motion';

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
			<motion.line
				// Dotted line at 25% height of the graph
				initial={{ x1: globalChartPadding, x2: globalChartPadding, opacity: 0 }}
				animate={{ x1: globalChartPadding, x2: viewBoxWidth - globalChartPadding, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				x1={0 + globalChartPadding} // starting point
				y1={viewBoxHeight / 4}
				y2={viewBoxHeight / 4}
				x2={viewBoxWidth - globalChartPadding} // ending point
				stroke={lightenColor(color, 10) || '#ededed'}
				strokeWidth="1"
				strokeDasharray="2,2"
			/>

			{/** Experimenting here, will later move to its own component */}
			<motion.line
				// Dotted line at 50% height of the graph
				initial={{ x1: globalChartPadding, x2: globalChartPadding, opacity: 0 }}
				animate={{ x1: globalChartPadding, x2: viewBoxWidth - globalChartPadding, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				x1={0 + globalChartPadding} // starting point
				y1={(viewBoxHeight / 4) * 2}
				y2={(viewBoxHeight / 4) * 2}
				x2={viewBoxWidth - globalChartPadding} // ending point
				stroke={lightenColor(color, 10) || '#ededed'}
				strokeWidth="1"
				strokeDasharray="2,2"
			/>
			<motion.line
				// Dotted line at 75% height of the graph
				initial={{ x1: globalChartPadding, x2: globalChartPadding, opacity: 0 }}
				animate={{ x1: globalChartPadding, x2: viewBoxWidth - globalChartPadding, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				x1={0 + globalChartPadding} // starting point
				y1={(viewBoxHeight / 4) * 3}
				y2={(viewBoxHeight / 4) * 3}
				x2={viewBoxWidth - globalChartPadding} // ending point
				stroke={lightenColor(color, 10) || '#ededed'}
				strokeWidth="1"
				strokeDasharray="2,2"
			/>
			{/** Experimenting here, will later move to its own component */}

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
