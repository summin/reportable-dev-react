import * as React from 'react';
import {
    Chart,
    PieSeries,
    Title,
    Tooltip
} from './dx-react-chart-bootstrap4.es.js';
import { EventTracker, Animation, Legend } from '@devexpress/dx-react-chart'


export default class Demo extends React.PureComponent {

    state = {
        data: this.props.data
    }

    render() {
        
        return (
                <Chart
                    data={this.state.data}
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