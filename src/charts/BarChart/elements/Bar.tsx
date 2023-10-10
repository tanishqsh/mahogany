import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { DataItem } from '../types/barChartTypes';
import { darkenColor, lightenColor } from '../../../lib-utils/fx';
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
		},
	}),
	animate: (custom: { viewBoxHeight: any; shouldDelay: any; index: number }) => ({
		y: 0,
		opacity: 1,
		transition: { duration: 0.3, type: 'tween', delay: custom.shouldDelay ? 0.5 + custom.index * 0.08 : 0 },
	}),
	hover: (custom: { color: string }) => ({
		y: 0,
		opacity: 1,
		transition: { duration: 0.3, delay: 0 },
		fill: lightenColor(custom.color, 10),
	}),
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
					<motion.g key={index} className={'group'}>
						<motion.rect
							variants={barVariants}
							whileHover={'hover'}
							onMouseEnter={() => {
								setIsBarHovered({ isHovered: true, index });
							}}
							onMouseLeave={() => {
								setIsBarHovered({ isHovered: false, index: -1 });
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
							custom={{ color, viewBoxHeight, shouldDelay: true, index }}
						/>
						<motion.text
							transition={{ duration: 0.3 }}
							fontSize={dynamicFontSize} // use dynamic font size
							initial={{ rotate: 0, opacity: 0, x: textX, y: textY + scaledHeight / 2 }} // Adjust y position to be half inside the bar
							animate={{
								opacity: isBarHovered.isHovered && isBarHovered.index === index ? 1 : 0,
								x: textX,
								y: textY + scaledHeight / 2, // Adjust y position to be half inside the bar
								transition: { duration: 0.5 },
							}}
							className="tracking-wider pointer-events-none"
							textAnchor="middle"
							alignmentBaseline="middle"
							fill={lightenColor(color, 50)}
						>
							{value.value}
						</motion.text>
						{index === isBarHovered.index && (
							<motion.text
								key={index}
								initial={{ opacity: 0, y: viewBoxHeight - globalChartPadding + 36, x: 0 + globalChartPadding }}
								animate={{
									opacity: 1,
									y: viewBoxHeight - globalChartPadding + 24,
									x: 0 + globalChartPadding,
									transition: { duration: 0.2 },
								}}
								fill={darkenColor(color, 10)}
								className={'px-2 py-1 text-xs font-bold'} // Add font-bold to make the text bold
								style={{ background: 'rgba(0, 0, 0, 0.5)' }} // Add background color
							>
								{value.label}: {value.value}
							</motion.text>
						)}

						<motion.text
							key={'maxValue'}
							initial={{ opacity: 0, y: 0 + globalChartPadding, x: 0 + globalChartPadding }} // Adjust y position to be half inside the bar
							animate={{
								opacity: 0.3,
								y: globalChartPadding - 12,
								x: 0 + globalChartPadding,
								transition: { duration: 0.2 },
							}}
							textAnchor="middle"
							alignmentBaseline="middle"
							fill={lightenColor(color, 10)}
							className={'text-xs'}
						>
							{maxValue}
						</motion.text>
						{index === isBarHovered.index && (
							<motion.text
								key={'originPoint'}
								initial={{ opacity: 0, y: viewBoxHeight - globalChartPadding, x: globalChartPadding }} // Adjust y position to be half inside the bar
								animate={{
									opacity: 1,
									y: viewBoxHeight - globalChartPadding,
									x: globalChartPadding - 16,
									transition: { duration: 0.2 },
								}}
								textAnchor="middle"
								alignmentBaseline="middle"
								fill={darkenColor(color, 10)}
								className={'text-xs'}
							>
								0
							</motion.text>
						)}
						{index === isBarHovered.index && (
							<motion.line
								// The line that connects the bar to the x axis
								initial={{ x2: globalChartPadding, opacity: 0 }}
								animate={{ x2: x, opacity: 1 }}
								transition={{ duration: 0.4, type: 'linear' }}
								x1={globalChartPadding} // essentially the starting point
								y1={y + 0.5}
								x2={x}
								y2={y + 0.5}
								stroke={darkenColor(color, 10)}
								strokeWidth="1.5"
								strokeDasharray={'3,3'}
							/>
						)}
						{index === isBarHovered.index && (
							<motion.text
								key={value.label + ' value'}
								initial={{ opacity: 0, y: y, x: globalChartPadding }}
								animate={{
									opacity: 1,
									y: y,
									x: globalChartPadding - axisOffset - 16,
									transition: { duration: 0.2 },
								}}
								textAnchor="middle"
								alignmentBaseline="middle"
								fill={darkenColor(color, 10)}
								className={'text-xs'}
							>
								{value.value}
							</motion.text>
						)}
					</motion.g>
				);
			})}
		</>
	);
};

export default Bars;
