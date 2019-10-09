import * as React from 'react';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Title,
    Legend,
} from './dx-react-chart-bootstrap4.es.js';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import { stackOffsetExpand } from 'd3-shape';

const data = [
    { year: '1q1', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '1q2', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '1q3', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '1q4', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '2q1', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '2q2', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '2q3', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '2q4', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '3q1', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '3q2', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '3q3', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '3q4', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '4q1', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '4q2', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '4q3', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
    { year: '4q4', totalC: 2.525, totalS: 2.525, totalH: 2.525 },
   
]

const Root = props => (
    <Legend.Root
      {...props}
      className="m-auto flex-row"
    />
  );
  
  const format = scale => scale.tickFormat(null, '%');
  
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
        <div>
          <Chart height="300"
            data={chartData}
          >
            <ArgumentAxis />
            <ValueAxis
              tickFormat={format}
            />
  
            <BarSeries
              name="Cost"
              valueField="totalC"
              argumentField="year"
            />
            <BarSeries
              name="Savings"
              valueField="totalS"
              argumentField="year"
            />
            <BarSeries
              name="Headwind"
              valueField="totalH"
              argumentField="year"
            />
        
            <Animation />
            <Legend position="bottom" rootComponent={Root} />
            <Stack
              stacks={[
                { series: ['Cost', 'Savings', 'Headwind'] },
              ]}
              offset={stackOffsetExpand}
            />
          </Chart>
        </div>
      );
    }
  }
  