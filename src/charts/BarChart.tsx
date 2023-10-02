import { motion } from 'framer-motion';
import '../tailwind.min.css';

import React, { FC } from 'react';

interface BarChartProps {
	data?: number[];
	color?: string;
	width?: number | string;
	height?: number | string;
}

const BarChart: FC<BarChartProps> = ({
	data = [5, 10, 20, 30, 40, 50, 60, 70, 80, 100],
	color = '#606C38',
	width = 250, // Default width
	height = 250, // Default height
}) => {
	/** padding between bars */
	const paddingBetweenBars = 6;

	/** convert the width to viewbox semantics */
	const viewBoxWidth = typeof width === 'string' ? 100 : width;
	const viewBoxHeight = typeof height === 'string' ? 100 : height;

	const maxValue = Math.max(...data);
	const barWidth = (viewBoxWidth - paddingBetweenBars * (data.length - 1)) / data.length; // Calculate dynamic bar width considering padding

	return (
		<svg width={width} height={height} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
			{data.map((value, index) => {
				const scaledHeight = (value / maxValue) * viewBoxHeight; // Scale height
				return (
					<motion.rect
						key={index}
						x={index * (barWidth + paddingBetweenBars)}
						y={viewBoxHeight - scaledHeight}
						width={barWidth}
						height={scaledHeight}
						fill={color}
						rx={10}
						ry={0}
						initial={{ y: scaledHeight, opacity: 1 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					/>
				);
			})}
		</svg>
	);
};

export default BarChart;
