import * as React from 'react';
import {
  ScaleObject,
  SeriesRef,
  Viewport
} from '@devexpress/dx-react-chart';

// -------------------------------------------------------------------------------------------------
// AreaSeries
// -------------------------------------------------------------------------------------------------

import {
  AreaSeries as AreaSeriesBase,
} from '@devexpress/dx-react-chart';


export namespace AreaSeries {
  /** Describes properties passed to a component that renders the series. */
  export type SeriesProps = AreaSeriesBase.SeriesProps;
}

export namespace AreaSeries {
  /** Describes properties of a component that renders series. */
  export type PathSeriesProps = AreaSeriesBase.PathSeriesProps;
}

export interface AreaSeriesProps {
  /** A series name. */
  name?: string;
  /** The name of a data field that provides series point values. */
  valueField?: string;
  /** The name of a data field that provides series point argument values. */
  argumentField?: string;
  /** An associated scale. */
  scaleName?: string;
  /** The series color. */
  color?: string;
  /** A component that renders series. */
  seriesComponent?: React.ComponentType<AreaSeriesBase.SeriesProps>;
}

/** The AreaSeries plugin visualizes the area series. */
export declare const AreaSeries: React.ComponentType<AreaSeriesProps> & {
  /** A component that renders series. */
  Path: React.ComponentType<AreaSeriesBase.PathSeriesProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// ArgumentAxis
// -------------------------------------------------------------------------------------------------

import {
  ArgumentAxis as ArgumentAxisBase,
} from '@devexpress/dx-react-chart';


export namespace ArgumentAxis {
  /** Describes properties passed to a component that renders the axis's root layout. */
  export type RootProps = ArgumentAxisBase.RootProps;
}

export namespace ArgumentAxis {
  /** Describes properties passed to a component that renders the axis's line, ticks and grid. */
  export type LineProps = ArgumentAxisBase.LineProps;
}

export namespace ArgumentAxis {
  /** Describes properties passed to a component that renders the axis's label. */
  export type LabelProps = ArgumentAxisBase.LabelProps;
}

export interface ArgumentAxisProps {
  /** The tick size. */
  tickSize?: number;
  /** The axis position. */
  position?: 'bottom' | 'top' | 'left' | 'right';
  /** The indent from the axis. */
  indentFromAxis?: number;
  /** A function that returns a tick formatter function. */
  tickFormat?: (scale: ScaleObject) => (tick: string) => string;
  /** Specifies whether to render ticks. */
  showTicks?: boolean;
  /** Specifies whether to render the grid. */
  showGrid?: boolean;
  /** Specifies whether to render the axis's line. */
  showLine?: boolean;
  /** Specifies whether to render the axis's labels. */
  showLabels?: boolean;
  /** A component that renders the axis's root layout. */
  rootComponent?: React.ComponentType<ArgumentAxisBase.RootProps>;
  /** A component that renders a tick. */
  tickComponent?: React.ComponentType<ArgumentAxisBase.LineProps>;
  /** A component that renders the axis's label. */
  labelComponent?: React.ComponentType<ArgumentAxisBase.LabelProps>;
  /** A component that renders the axis's line. */
  lineComponent?: React.ComponentType<ArgumentAxisBase.LineProps>;
  /** A component that renders the grid. */
  gridComponent?: React.ComponentType<ArgumentAxisBase.LineProps>;
}

/** The ArgumentAxis plugin visualizes the argument axis. */
export declare const ArgumentAxis: React.ComponentType<ArgumentAxisProps> & {
  /** A component that renders the axis's root layout. */
  Root: React.ComponentType<ArgumentAxisBase.RootProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the tick. */
  Tick: React.ComponentType<ArgumentAxisBase.LineProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the axis's label. */
  Label: React.ComponentType<ArgumentAxisBase.LabelProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the axis's line. */
  Line: React.ComponentType<ArgumentAxisBase.LineProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the grid. */
  Grid: React.ComponentType<ArgumentAxisBase.LineProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// BarSeries
// -------------------------------------------------------------------------------------------------

import {
  BarSeries as BarSeriesBase,
} from '@devexpress/dx-react-chart';


export namespace BarSeries {
  /** Describes properties passed to a component that renders a bar. */
  export type PointProps = BarSeriesBase.PointProps;
}

export interface BarSeriesProps {
  /** The series name. */
  name?: string;
  /** The name of a data field that provides series point values. */
  valueField?: string;
  /** The name of a data field that provides series point argument values. */
  argumentField?: string;
  /** An associated scale. */
  scaleName?: string;
  /** The bar width in relative units. */
  barWidth?: number;
  /** The series color. */
  color?: string;
  /** A component that renders a bar. */
  pointComponent?: React.ComponentType<BarSeriesBase.PointProps>;
}

/** The BarSeries plugin visualizes the bar series. */
export declare const BarSeries: React.ComponentType<BarSeriesProps> & {
  /** A component that renders a bar. */
  Point: React.ComponentType<BarSeriesBase.PointProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// Chart
// -------------------------------------------------------------------------------------------------

import {
  Chart as ChartBase,
} from '@devexpress/dx-react-chart';


export namespace Chart {
  /** Describes properties passed to a component that renders the chart root layout. */
  export type RootProps = ChartBase.RootProps;
}

export namespace Chart {
  /** Describes properties passed to a component that renders the chart's label. */
  export type LabelProps = ChartBase.LabelProps;
}

export interface ChartProps {
  /** An array containing custom data. */
  data?: Array<any>;
  /** Chart width. */
  width?: number;
  /** Chart height. */
  height?: number;
  /** Rotates the chart. */
  rotated?: boolean;
  /** A component that renders the chart's root layout. */
  rootComponent?: React.ComponentType<ChartBase.RootProps>;
}

/** The Chart is a root container component designed to process and display data specified via the `data` property. The Chart's functionality  is implemented in several plugins specified as child components. */
export declare const Chart: React.ComponentType<ChartProps> & {
  /** A component that renders the chart's label. */
  Label: React.ComponentType<ChartBase.LabelProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// Legend
// -------------------------------------------------------------------------------------------------

import {
  Legend as LegendBase,
} from '@devexpress/dx-react-chart';


export namespace Legend {
  /** Describes properties passed to a component that renders the label. */
  export type LabelProps = LegendBase.LabelProps;
}

export namespace Legend {
  /** Describes properties passed to a component that renders the legend's root layout. */
  export type RootProps = LegendBase.RootProps;
}

export namespace Legend {
  /** Describes properties passed to a component that renders a legend item. */
  export type ItemProps = LegendBase.ItemProps;
}

export interface LegendProps {
  /** A component that renders a marker. */
  markerComponent?: React.ComponentType<object>;
  /** A component that renders the legend label. */
  labelComponent?: React.ComponentType<LegendBase.LabelProps>;
  /** A component that renders the legend's root layout. */
  rootComponent?: React.ComponentType<LegendBase.RootProps>;
  /** A component that renders a legend item. */
  itemComponent?: React.ComponentType<LegendBase.ItemProps>;
  /** The legend position. */
  position?: 'left' | 'right' | 'top' | 'bottom';
}

/** The Legend plugin visualizes the legend. */
export declare const Legend: React.ComponentType<LegendProps> & {
  /** A component that renders the root layout. */
  Root: React.ComponentType<LegendBase.RootProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders an item. */
  Item: React.ComponentType<LegendBase.ItemProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a marker. */
  Marker: React.ComponentType<object & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the label. */
  Label: React.ComponentType<LegendBase.LabelProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// LineSeries
// -------------------------------------------------------------------------------------------------

import {
  LineSeries as LineSeriesBase,
} from '@devexpress/dx-react-chart';


export namespace LineSeries {
  /** Describes properties passed to a component that renders series. */
  export type SeriesProps = LineSeriesBase.SeriesProps;
}

export namespace LineSeries {
  /** Describes properties of a component that renders series. */
  export type PathSeriesProps = LineSeriesBase.PathSeriesProps;
}

export interface LineSeriesProps {
  /** The series name. */
  name?: string;
  /** The name of a data field that provides series point values. */
  valueField?: string;
  /** The name of a data field that provides series point argument values. */
  argumentField?: string;
  /** An associated scale. */
  scaleName?: string;
  /** The series color. */
  color?: string;
  /** A component that renders series. */
  seriesComponent?: React.ComponentType<LineSeriesBase.SeriesProps>;
}

/** The LineSeries plugin visualizes the line series. */
export declare const LineSeries: React.ComponentType<LineSeriesProps> & {
  /** A component that renders series. */
  Path: React.ComponentType<LineSeriesBase.PathSeriesProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// PieSeries
// -------------------------------------------------------------------------------------------------

import {
  PieSeries as PieSeriesBase,
} from '@devexpress/dx-react-chart';


export namespace PieSeries {
  /** Describes properties passed to a component that renders the slice. */
  export type PointProps = PieSeriesBase.PointProps;
}

export interface PieSeriesProps {
  /** A series name. */
  name?: string;
  /** The name of a data field that provides series point values. */
  valueField?: string;
  /** The name of a data field that provides series point argument values. */
  argumentField?: string;
  /** The inner radius in relative units. */
  innerRadius?: number;
  /** The outer radius in relative units. */
  outerRadius?: number;
  /** A component that renders a slice. */
  pointComponent?: React.ComponentType<PieSeriesBase.PointProps>;
}

/** The PieSeries plugin visualizes pie series. */
export declare const PieSeries: React.ComponentType<PieSeriesProps> & {
  /** A component that renders a slice. */
  Point: React.ComponentType<PieSeriesBase.PointProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// ScatterSeries
// -------------------------------------------------------------------------------------------------

import {
  ScatterSeries as ScatterSeriesBase,
} from '@devexpress/dx-react-chart';


export namespace ScatterSeries {
  /** Describes properties passed to a component that renders the point. */
  export type PointProps = ScatterSeriesBase.PointProps;
}

export namespace ScatterSeries {
  /** Describes properties passed to a component that renders the series. */
  export type SeriesProps = ScatterSeriesBase.SeriesProps;
}

export interface ScatterSeriesProps {
  /** A series name. */
  name?: string;
  /** The name of a data field that provides series point values. */
  valueField?: string;
  /** The name of a data field that provides series point argument values. */
  argumentField?: string;
  /** The associated scale. */
  scaleName?: string;
  /** Point options. */
  point?: { size : number };
  /** A series color. */
  color?: string;
  /** A component that renders a series point. */
  pointComponent?: React.ComponentType<ScatterSeriesBase.PointProps>;
}

/** The ScatterSeries plugin visualizes the scatter series. */
export declare const ScatterSeries: React.ComponentType<ScatterSeriesProps> & {
  /** A component that renders the series of points. */
  Path: React.ComponentType<ScatterSeriesBase.SeriesProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders a series point. */
  Point: React.ComponentType<ScatterSeriesBase.PointProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// SplineSeries
// -------------------------------------------------------------------------------------------------

import {
  SplineSeries as SplineSeriesBase,
} from '@devexpress/dx-react-chart';


export namespace SplineSeries {
  /** Describes properties passed to a component that renders series. */
  export type SeriesProps = SplineSeriesBase.SeriesProps;
}

export namespace SplineSeries {
  /** Describes properties of a component that renders series. */
  export type PathSeriesProps = SplineSeriesBase.PathSeriesProps;
}

export interface SplineSeriesProps {
  /** The series name. */
  name?: string;
  /** The name of a data field that provides series point values. */
  valueField?: string;
  /** The name of a data field that provides series point argument values. */
  argumentField?: string;
  /** An associated scale. */
  scaleName?: string;
  /** The series color. */
  color?: string;
  /** A component that renders series. */
  seriesComponent?: React.ComponentType<SplineSeriesBase.SeriesProps>;
}

/** The SplineSeries plugin visualizes the spline series. */
export declare const SplineSeries: React.ComponentType<SplineSeriesProps> & {
  /** A component that renders series. */
  Path: React.ComponentType<SplineSeriesBase.PathSeriesProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// Title
// -------------------------------------------------------------------------------------------------

import {
  Title as TitleBase,
} from '@devexpress/dx-react-chart';


export namespace Title {
  /** Describes properties passed to a component that renders the title. */
  export type TextProps = TitleBase.TextProps;
}

export interface TitleProps {
  /** A component that renders the title. */
  textComponent?: React.ComponentType<TitleBase.TextProps>;
  /** The title text. */
  text?: string;
  /** The title position. */
  position?: 'top' | 'bottom';
}

/** The Title plugin renders the chart title. */
export declare const Title: React.ComponentType<TitleProps> & {
  /** A component that renders the title. */
  Text: React.ComponentType<TitleBase.TextProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// Tooltip
// -------------------------------------------------------------------------------------------------

import {
  Tooltip as TooltipBase,
} from '@devexpress/dx-react-chart';


export namespace Tooltip {
  /** Describes properties passed to a component that renders the tooltip. */
  export type OverlayProps = TooltipBase.OverlayProps;
}

export namespace Tooltip {
  /** Describes properties passed to a component that renders the tooltip's content. */
  export type ContentProps = TooltipBase.ContentProps;
}

export namespace Tooltip {
  /** Describes properties passed to a component that renders the tooltip's arrow. */
  export type ArrowProps = TooltipBase.ArrowProps;
}

export namespace Tooltip {
  /** Describes properties passed to a component that renders the tooltip's sheet. */
  export type SheetProps = TooltipBase.SheetProps;
}

export interface TooltipProps {
  /** An item for which the tooltip is displayed initially. */
  defaultTargetItem?: SeriesRef;
  /** An item for which the tooltip is displayed. */
  targetItem?: SeriesRef;
  /** A function that is executed when the target item changes. */
  onTargetItemChange?: (target: SeriesRef) => void;
  /** A component that renders the tooltip. */
  overlayComponent?: React.ComponentType<TooltipBase.OverlayProps>;
  /** A component that renders the tooltip content. */
  contentComponent?: React.ComponentType<TooltipBase.ContentProps>;
  /** A component that renders the tooltip arrow. */
  arrowComponent?: React.ComponentType<TooltipBase.ArrowProps>;
  /** A component that renders the tooltip sheet. */
  sheetComponent?: React.ComponentType<TooltipBase.SheetProps>;
}

/** The `Tooltip` plugin implements a tooltip that shows information about a point. The tooltip appears when a user hovers the mouse pointer over a series point. */
export declare const Tooltip: React.ComponentType<TooltipProps> & {
  /** A component that renders the tooltip. */
  Overlay: React.ComponentType<TooltipBase.OverlayProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the tooltip's content. */
  Content: React.ComponentType<TooltipBase.ContentProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the tooltip arrow. */
  Arrow: React.ComponentType<TooltipBase.ArrowProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the tooltip sheet. */
  Sheet: React.ComponentType<TooltipBase.SheetProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// ValueAxis
// -------------------------------------------------------------------------------------------------

import {
  ValueAxis as ValueAxisBase,
} from '@devexpress/dx-react-chart';


export namespace ValueAxis {
  /** Describes properties passed to a component that renders the axis root layout. */
  export type RootProps = ValueAxisBase.RootProps;
}

export namespace ValueAxis {
  /** Describes properties passed to a component that renders the axis's line, ticks and grid. */
  export type LineProps = ValueAxisBase.LineProps;
}

export namespace ValueAxis {
  /** Describes properties passed to a component that renders the axis label. */
  export type LabelProps = ValueAxisBase.LabelProps;
}

export interface ValueAxisProps {
  /** The tick size. */
  tickSize?: number;
  /** The axis position. */
  position?: 'bottom' | 'top' | 'left' | 'right';
  /** The scale name. */
  scaleName?: string;
  /** The indent from the axis. */
  indentFromAxis?: number;
  /** A function that returns a tick formatter function. */
  tickFormat?: (scale: ScaleObject) => (tick: string) => string;
  /** Specifies whether to render ticks. */
  showTicks?: boolean;
  /** Specifies whether to render the grid. */
  showGrid?: boolean;
  /** Specifies whether to render the axis's line. */
  showLine?: boolean;
  /** Specifies whether to render the axis's labels. */
  showLabels?: boolean;
  /** A component that renders the axis root layout. */
  rootComponent?: React.ComponentType<ValueAxisBase.RootProps>;
  /** A component that renders a tick. */
  tickComponent?: React.ComponentType<ValueAxisBase.LineProps>;
  /** A component that renders the axis label. */
  labelComponent?: React.ComponentType<ValueAxisBase.LabelProps>;
  /** A component that renders the axis line. */
  lineComponent?: React.ComponentType<ValueAxisBase.LineProps>;
  /** A component that renders the grid. */
  gridComponent?: React.ComponentType<ValueAxisBase.LineProps>;
}

/** The ValueAxis plugin visualizes the value axis. */
export declare const ValueAxis: React.ComponentType<ValueAxisProps> & {
  /** A component that renders the axis root layout. */
  Root: React.ComponentType<ValueAxisBase.RootProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the tick. */
  Tick: React.ComponentType<ValueAxisBase.LineProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the axis label. */
  Label: React.ComponentType<ValueAxisBase.LabelProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the axis line. */
  Line: React.ComponentType<ValueAxisBase.LineProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
  /** A component that renders the grid. */
  Grid: React.ComponentType<ValueAxisBase.LineProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};

// -------------------------------------------------------------------------------------------------
// ZoomAndPan
// -------------------------------------------------------------------------------------------------

import {
  ZoomAndPan as ZoomAndPanBase,
} from '@devexpress/dx-react-chart';


export namespace ZoomAndPan {
  /** Describes properties passed to a component that renders the rectangle around the area a user zooms with the mouse drag gesture. */
  export type DragBoxProps = ZoomAndPanBase.DragBoxProps;
}

export interface ZoomAndPanProps {
  /** The default viewport. */
  defaultViewport?: Viewport;
  /** The viewport. */
  viewport?: Viewport;
  /** A function that is executed when the viewport changes. */
  onViewportChange?: (viewport: Viewport) => void;
  /** The type of interaction available for the argument scale. */
  interactionWithArguments?: 'none' | 'pan' | 'zoom' | 'both';
  /** The type of interaction available for the value scale. */
  interactionWithValues?: 'none' | 'pan' | 'zoom' | 'both';
  /** The key the allows a user to zoom a region by selecting it with the mouse drag gesture. */
  zoomRegionKey?: 'shift' | 'alt' | 'ctrl';
  /** A component that renders the rectangle that appears when a user zooms a region. */
  dragBoxComponent?: React.ComponentType<ZoomAndPanBase.DragBoxProps>;
}

/** The `ZoomAndPan` plugin allows you to set the chart's viewport and change it in response to mouse and touch events. */
export declare const ZoomAndPan: React.ComponentType<ZoomAndPanProps> & {
  /** A component that renders the rectangle that appears when a user zooms a region. */
  DragBox: React.ComponentType<ZoomAndPanBase.DragBoxProps & { className?: string; style?: React.CSSProperties; [x: string]: any }>;
};
