import React from 'react';
import { motion } from 'framer-motion';
import { AxesProps, DashPattern } from '../types/barChartTypes';

export const Axes: React.FC<AxesProps> = ({ width, height, strokeColor, globalChartPadding }) => {
	let xAxis = {
		x1: 0 + globalChartPadding,
		y1: height - globalChartPadding,
		y2: height - globalChartPadding,
		x2: width - globalChartPadding,
	};

	let yAxis = {
		x1: 0 + globalChartPadding,
		y1: height - globalChartPadding,
		y2: 0 + globalChartPadding,
		x2: 0 + globalChartPadding,
	};

	return (
		<>
			<motion.line
				// X axis
				initial={{ x2: xAxis.x1, opacity: 0 }}
				animate={{ x2: xAxis.x2, opacity: 1 }}
				transition={{ duration: 0.5 }}
				x1={xAxis.x1} // essentially the starting point
				y1={xAxis.y1}
				y2={xAxis.y2}
				x2={xAxis.x2}
				stroke={strokeColor}
				strokeWidth="2"
				strokeDasharray={DashPattern.SmallDashes}
			/>
			<motion.line
				// Y axis
				initial={{ y2: yAxis.y1, opacity: 0 }}
				animate={{ y2: yAxis.y2, opacity: 1 }}
				transition={{ duration: 0.5 }}
				x1={yAxis.x1}
				y1={yAxis.y1}
				x2={yAxis.x2}
				y2={yAxis.y2}
				stroke={strokeColor}
				strokeWidth="2"
				strokeDasharray={DashPattern.SmallDashes}
			/>
		</>
	);
};
