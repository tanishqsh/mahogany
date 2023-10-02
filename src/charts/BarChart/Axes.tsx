import React from 'react';
import { motion } from 'framer-motion';

interface AxesProps {
	width: number;
	height: number;
	strokeColor: string;
	dataLength: number;
}

export const Axes: React.FC<AxesProps> = ({ width, height, strokeColor, dataLength }) => {
	return (
		<>
			<motion.line
				initial={{ x2: 0, opacity: 0 }}
				animate={{ x2: width, opacity: 1 }}
				transition={{ duration: 0.5, delay: dataLength * 0.05 + 0.5 }}
				x1={0}
				y1={height}
				y2={height}
				x2={width}
				stroke={strokeColor}
				strokeWidth="4"
				strokeDasharray="20,3"
			/>
			<motion.line
				initial={{ y2: height, opacity: 0 }}
				animate={{ y2: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: dataLength * 0.05 + 0.5 }}
				x1={0}
				y1={height}
				x2={0}
				stroke={strokeColor}
				strokeWidth="4"
				strokeDasharray="20,3"
			/>
		</>
	);
};
