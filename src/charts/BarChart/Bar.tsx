import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { DataItem } from './barChartTypes';
interface BarsProps {
	data: DataItem[];
	maxValue: number;
	viewBoxHeight: number;
	barWidth: number;
	gapBetweenBars: number;
	axisOffset: number;
	color: string;
	globalChartPadding: number;
}

const Bars: FC<BarsProps> = ({ data, maxValue, viewBoxHeight, barWidth, gapBetweenBars, axisOffset, color, globalChartPadding }) => {
	return (
		<>
			{data.map((value, index) => {
				// Scale height

				/** Explanation for this: the height needs to be so that globalchartpadding gets subtracted from both sides, and then axis from the bottom, and ofcourse it should start from the viewboxheight */
				const scaledHeight = (value.value / maxValue) * (viewBoxHeight - globalChartPadding * 2 - axisOffset);

				let x = globalChartPadding + axisOffset + index * (barWidth + gapBetweenBars);
				let y = viewBoxHeight - globalChartPadding - axisOffset - scaledHeight;

				return (
					<motion.rect
						whileHover={{ y: -10, opacity: 0.7, transition: { duration: 0.2 } }}
						x={x}
						y={y}
						width={barWidth}
						rx={0}
						ry={12}
						height={scaledHeight}
						fill={color}
						initial={{ y: viewBoxHeight, opacity: 1 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { duration: 0.5, type: 'tween', delay: index * 0.05 },
						}}
					/>
				);
			})}
		</>
	);
};

export default Bars;
