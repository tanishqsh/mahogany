import '../tailwind.min.css';
import { FC } from 'react';
interface BarChartProps {
    data?: number[];
    color?: string;
    width?: number | string;
    height?: number | string;
}
declare const BarChart: FC<BarChartProps>;
export default BarChart;
