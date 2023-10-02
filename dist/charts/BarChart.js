"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
require("../tailwind.min.css");
const colors_1 = require("../brand/colors");
const react_1 = __importDefault(require("react"));
const BarChart = ({ data = [5, 10, 20, 30, 40, 50, 60, 70, 80, 100], color = colors_1.mahoganyPallete[0], width = 250, // Default width
height = 250, // Default height
 }) => {
    /** padding between bars */
    const paddingBetweenBars = 18;
    /** convert the width to viewbox semantics */
    const viewBoxWidth = typeof width === 'string' ? 100 : width;
    const viewBoxHeight = typeof height === 'string' ? 100 : height;
    const maxValue = Math.max(...data);
    const barWidth = (viewBoxWidth - paddingBetweenBars * (data.length - 1)) / data.length; // Calculate dynamic bar width considering padding
    return (react_1.default.createElement("svg", { width: width, height: height, viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}` }, data.map((value, index) => {
        const scaledHeight = (value / maxValue) * viewBoxHeight; // Scale height
        let fillColor = colors_1.mahoganyPallete[(index + 1) % colors_1.mahoganyPallete.length];
        console.log(fillColor);
        return (react_1.default.createElement(framer_motion_1.motion.rect, { key: index, x: index * (barWidth + paddingBetweenBars), y: viewBoxHeight - scaledHeight, width: barWidth, height: scaledHeight, fill: fillColor, rx: 5, ry: 5, initial: { y: scaledHeight, opacity: 1 }, animate: { y: 0, opacity: 1 }, transition: { duration: 10, type: 'spring', delay: index * 0.05 } }));
    })));
};
exports.default = BarChart;
