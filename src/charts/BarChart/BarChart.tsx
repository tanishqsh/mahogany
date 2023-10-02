import { motion } from 'framer-motion';
import '../../tailwind.min.css';
import React, { FC } from 'react';
import { BarChartProps } from './barChartTypes';
import { defaults } from './defaults';
import { lightenColor } from '../../lib-utils/fx';

const BarChart: FC<BarChartProps> = ({
	data = defaults.data,
	color = defaults.color,
	width = defaults.width, // Default width
	height = defaults.height, // Default height
	barGap = defaults.barGap,
}) => {
	/** convert the width to viewbox semantics */
	const viewBoxWidth = typeof width === 'string' ? 100 : width;
	const viewBoxHeight = typeof height === 'string' ? 100 : height;

	/** gap between bars in the chart */
	const gapBetweenBars = ((barGap / 100) * viewBoxWidth) / data.length;

	/** gap between chart data and the axis */
	const axisOffset = 12;

	const maxValue = Math.max(...data.map((item) => item.value));

	/** dynamic bar width */
	const barWidth = (viewBoxWidth - axisOffset - gapBetweenBars * (data.length - 1)) / data.length;

	/** Calculates the stroke color */
	const axisStrokeColor = lightenColor(color, 25);

	return (
		<svg width={width} height={height} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
			{/** X Axis*/}
			<motion.line
				initial={{ x2: 0, opacity: 0 }}
				animate={{ x2: viewBoxWidth, opacity: 1 }}
				transition={{ duration: 0.5, delay: data.length * 0.05 + 0.5 }}
				x1={0}
				y1={viewBoxHeight}
				y2={viewBoxHeight}
				stroke={axisStrokeColor}
				strokeWidth="4"
				strokeDasharray="20,3"
			/>

			{/** Y Axis*/}
			<motion.line
				initial={{ y2: viewBoxHeight, opacity: 0 }}
				animate={{ y2: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: data.length * 0.05 + 0.5 }}
				x1={0}
				y1={viewBoxHeight}
				x2={0}
				stroke={axisStrokeColor}
				strokeWidth="4"
				strokeDasharray="20,3"
			/>

			{data.map((value, index) => {
				const scaledHeight = (value.value / maxValue) * viewBoxHeight; // Scale height

				return (
					<motion.rect
						key={index}
						x={axisOffset + index * (barWidth + gapBetweenBars)}
						y={viewBoxHeight - scaledHeight - axisOffset}
						width={barWidth}
						height={scaledHeight}
						fill={color}
						initial={{ y: scaledHeight, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{ duration: 0.5, type: 'tween', delay: index * 0.05 }}
					/>
				);
			})}
		</svg>
	);
};

export default BarChart;
