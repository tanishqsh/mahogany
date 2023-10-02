import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface BarsProps {
	data: { value: number }[];
	maxValue: number;
	viewBoxHeight: number;
	barWidth: number;
	gapBetweenBars: number;
	axisOffset: number;
	color: string;
}

const Bars: FC<BarsProps> = ({ data, maxValue, viewBoxHeight, barWidth, gapBetweenBars, axisOffset, color }) => {
	return (
		<>
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
		</>
	);
};

export default Bars;
