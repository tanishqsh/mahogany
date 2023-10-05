import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { DataItem } from '../types/barChartTypes';
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

const barVariants = {
	initial: (custom: { viewBoxHeight: any; shouldDelay: any; index: number }) => ({
		y: custom.viewBoxHeight,
		opacity: 0,
		transition: {
			duration: 0.3,
			type: 'tween',
			delay: custom.shouldDelay ? 0.5 + custom.index * 0.08 : 0,
		},
	}),
	animate: (custom: { viewBoxHeight: any; shouldDelay: any; index: number }) => ({
		y: 0,
		opacity: 1,
		transition: { duration: 0.3, type: 'tween' },
	}),
	hover: {
		y: -2,
		opacity: 0.9,
		transition: { duration: 0.2, delay: 0 },
	},
};

const Bars: FC<BarsProps> = ({ data, maxValue, viewBoxHeight, barWidth, gapBetweenBars, axisOffset, color, globalChartPadding }) => {
	const [isBarHovered, setIsBarHovered] = React.useState({
		isHovered: false,
		index: -1,
	});

	return (
		<>
			{data.map((value, index) => {
				// Scale height

				/** Explanation for this: the height needs to be so that globalchartpadding gets subtracted from both sides, and then axis from the bottom, and ofcourse it should start from the viewboxheight */
				const scaledHeight = (value.value / maxValue) * (viewBoxHeight - globalChartPadding * 2 - axisOffset);

				let x = globalChartPadding + axisOffset + index * (barWidth + gapBetweenBars);
				let y = viewBoxHeight - scaledHeight - globalChartPadding - axisOffset;

				const textX = x + barWidth / 2; // center the text
				const textY = y; // 10px above the bar
				const dynamicFontSize = barWidth / 4; // dynamic font size based on barWidth

				return (
					<motion.g className={'group'}>
						<motion.rect
							variants={barVariants}
							whileHover={'hover'}
							onHoverStart={() => {
								setIsBarHovered({ isHovered: true, index });
							}}
							initial={'initial'}
							animate={'animate'}
							x={x}
							y={y}
							width={barWidth}
							rx={0}
							ry={12}
							height={scaledHeight}
							fill={color}
							custom={{ viewBoxHeight, shouldDelay: true, index }}
						/>
						<motion.text
							transition={{ duration: 0.3 }}
							fontSize={dynamicFontSize} // use dynamic font size
							initial={{ rotate: 0, opacity: 0, x: textX, y: textY + scaledHeight / 2 }} // Adjust y position to be half inside the bar
							animate={{
								rotate: 90,
								opacity: isBarHovered.isHovered && isBarHovered.index === index ? 1 : 0,
								x: textX,
								y: textY + scaledHeight / 2, // Adjust y position to be half inside the bar
								transition: { duration: 0.5 },
							}}
							className="tracking-wider pointer-events-none"
							textAnchor="middle"
							alignmentBaseline="middle"
							fill="#fff"
						>
							{value.label.length * dynamicFontSize <= scaledHeight
								? value.label
								: value.label.substring(0, Math.floor(scaledHeight / dynamicFontSize)) + '...'}
						</motion.text>
					</motion.g>
				);
			})}
		</>
	);
};

export default Bars;
