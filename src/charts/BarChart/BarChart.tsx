import { motion } from 'framer-motion';
import '../../tailwind.min.css';
import React, { FC } from 'react';
import { BarChartProps } from './barChartTypes';
import { defaults } from './defaults';
import { darkenColor } from '../../lib-utils/fx';

const BarChart: FC<BarChartProps> = ({
	data = defaults.data,
	color = defaults.color,
	width = defaults.width, // Default width
	height = defaults.height, // Default height
}) => {
	/** padding between bars */
	const paddingBetweenBars = 12;

	/** convert the width to viewbox semantics */
	const viewBoxWidth = typeof width === 'string' ? 100 : width;
	const viewBoxHeight = typeof height === 'string' ? 100 : height;

	const axisOffset = 12;

	const maxValue = Math.max(...data.map((item) => item.value));
	const barWidth = (viewBoxWidth - axisOffset - paddingBetweenBars * (data.length - 1)) / data.length; // Recalculate bar width considering padding and axis offset

	/** Calculates the stroke color */
	const axisStrokeColor = darkenColor(color, 35);

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
				strokeDasharray="1,3"
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
				strokeDasharray="1,3"
			/>

			{data.map((value, index) => {
				const scaledHeight = (value.value / maxValue) * viewBoxHeight; // Scale height

				return (
					<motion.rect
						key={index}
						x={axisOffset + index * (barWidth + paddingBetweenBars)}
						y={viewBoxHeight - scaledHeight - axisOffset}
						width={barWidth}
						height={scaledHeight}
						fill={color}
						radius={5}
						initial={{ y: scaledHeight, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, type: 'tween', delay: index * 0.05 }}
					/>
				);
			})}
		</svg>
	);
};

export default BarChart;
