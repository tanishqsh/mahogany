import { motion } from 'framer-motion';
import '../../tailwind.min.css';
import React, { FC } from 'react';
import { BarChartProps } from './barChartTypes';
import { defaults } from './defaults';

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

	const maxValue = Math.max(...data.map((item) => item.value));
	const barWidth = (viewBoxWidth - paddingBetweenBars * (data.length - 1)) / data.length; // Calculate dynamic bar width considering padding

	return (
		<svg width={width} height={height} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
			{data.map((value, index) => {
				const scaledHeight = (value.value / maxValue) * viewBoxHeight; // Scale height

				return (
					<motion.rect
						key={index}
						x={index * (barWidth + paddingBetweenBars)}
						y={viewBoxHeight - scaledHeight}
						width={barWidth}
						height={scaledHeight}
						fill={color}
						rx={5}
						ry={5}
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
