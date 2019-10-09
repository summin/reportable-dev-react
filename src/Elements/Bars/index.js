
import React, { useEffect } from 'react'
import * as d3 from '../d3'

const bars = ({ ...props }) => {

    var { data, style } = props;

    var width = 100,
        barHeight = 20;

    var x = d3.scale.linear()
        .domain([0, width])
        .range([0, width]);

    var chart = d3.select(".chart." + props.ID)
        .attr("width", width)
        .attr("height", barHeight * data.length);


    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function (d, i) { return "translate(0," + i * barHeight + ")"; })
        .attr("left", 20 + "px");

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function (d) { return x(d) + ((d < 50) ? 25 : -5); })
        .attr("y", barHeight / 2.4)
        .attr("dy", ".35em")
        .text(function (d) { return d + "%"; });

}

export default ({ ...props }) => {
    useEffect(() => bars(props))
    return (
            <svg className={'chart ' + props.ID} />

    )
}
