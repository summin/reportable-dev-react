import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title,
    Legend,
    Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import {Animation, EventTracker} from '@devexpress/dx-react-chart';

const data = [
    {region: 'Asia', val: 4119626293},
    {region: 'Africa', val: 1012956064},
    {region: 'Northern America', val: 344124520},
    {region: 'Latin America and the Caribbean', val: 590946440},
    {region: 'Europe', val: 727082222},
    {region: 'Oceania', val: 35104756},
];

    export default ({...props}) => {

        const {data: chartData} = props.data;
        console.log(chartData)
        return (

            <Chart
                data={props.data}
                width={props.width}
                height={props.height}
            >
                <PieSeries
                    valueField="value"
                    argumentField="name"
                    innerRadius={0.5}
                />
                <EventTracker />
                <Tooltip />
                {props.legendSide && <Legend position={props.legendSide}/>}
                <Animation/>
            </Chart>
        );

}