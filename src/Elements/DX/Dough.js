import * as React from 'react';
import {
    Chart,
    PieSeries,
    Title,
    Tooltip
} from './dx-react-chart-bootstrap4.es.js';
import { EventTracker, Animation, Legend } from '@devexpress/dx-react-chart'

const data = [
    { region: 'Asia', val: 4119626293 },
    { region: 'Africa', val: 1012956064 },
];

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
                <Chart
                    data={chartData}
                    width={this.props.width}
                    height={this.props.height}
                >
                    <PieSeries
                        valueField="val"
                        argumentField="region"
                        innerRadius={0.6}
                    />
                    <Animation />

                </Chart>
        );
    }
}