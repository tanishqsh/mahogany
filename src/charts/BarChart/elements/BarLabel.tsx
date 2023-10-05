import { motion } from 'framer-motion';
import React from 'react';

const BarLabel: React.FC<{
	textX: number;
	textY: number;
	scaledHeight: number;
	dynamicFontSize: number;
	label: string;
	isHovered: boolean;
	index: number;
	hoveredIndex: number;
}> = ({ textX, textY, scaledHeight, dynamicFontSize, label, isHovered, index, hoveredIndex }) => (
	<motion.text
		transition={{ duration: 0.3 }}
		fontSize={dynamicFontSize}
		initial={{ rotate: 0, opacity: 0, x: textX, y: textY + scaledHeight / 2 }}
		animate={{
			rotate: 90,
			opacity: isHovered && hoveredIndex === index ? 1 : 0,
			x: textX,
			y: textY + scaledHeight / 2,
			transition: { duration: 0.5 },
		}}
		className="tracking-wider pointer-events-none"
		textAnchor="middle"
		alignmentBaseline="middle"
		fill="#fff"
	>
		{label.length * dynamicFontSize <= scaledHeight ? label : label.substring(0, Math.floor(scaledHeight / dynamicFontSize)) + '...'}
	</motion.text>
);

export default BarLabel;
