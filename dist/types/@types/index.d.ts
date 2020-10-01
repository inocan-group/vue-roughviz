import { ExtractPropTypes, barChartOptions, stackedBarChartOptions, pieChartOptions, lineChartOptions, scatterChartOptions } from "../shared/index";
export declare type IBarChart = ExtractPropTypes<typeof barChartOptions>;
export declare type IStackedBarChart = ExtractPropTypes<typeof stackedBarChartOptions>;
export declare type IPieChart = ExtractPropTypes<typeof pieChartOptions>;
export declare type ILineChart = ExtractPropTypes<typeof lineChartOptions>;
export declare type IScatterChart = ExtractPropTypes<typeof scatterChartOptions>;
export declare type IChart = IBarChart | IStackedBarChart | IPieChart | ILineChart | IScatterChart;
export declare type IChartConfig<T extends IChart> = {
    element: string;
    data: T['chartData'];
} & Omit<T, 'chartData'>;
