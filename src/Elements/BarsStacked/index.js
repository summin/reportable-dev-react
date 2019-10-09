
import React, { Fragment, useEffect } from 'react'
import * as d3 from '../d3'

const barsStacked = ({ ...props }) => {

    var data = [
        { month: 'Jan', A: 20, B: 5, C: 75 },
        { month: 'Feb', A: 30, B: 10, C: 20 },
        { month: 'Mar', A: 30, B: 10, C: 20 }
    ];


    var xData = ["A", "B", "C"];

    var margin = { top: 20, right: 50, bottom: 30, left: 0 },
        width = 350 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .35);

    var y = d3.scale.linear()
        .rangeRound([height, 0]);

    var color = d3.scale.category20();

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var svg = d3.select(".barsStacked." + props.ID).select("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    var dataIntermediate = xData.map(function (c) {
        return data.map(function (d) {
            return { x: d.month, y: d[c] };
        });
    });

    var dataStackLayout = d3.layout.stack()(dataIntermediate);

    x.domain(dataStackLayout[0].map(function (d) {
        return d.x;
    }));

    y.domain([0,
        d3.max(dataStackLayout[dataStackLayout.length - 1],
            function (d) { return d.y0 + d.y; })
    ])
        .nice();

    var layer = svg.selectAll(".stack")
        .data(dataStackLayout)
        .enter().append("g")
        .attr("class", "stack")
        .style("fill", function (d, i) {
            return color(i);
        });

    layer.selectAll("rect")
        .data(function (d) {
            return d;
        })
        .enter().append("rect")
        .attr("x", function (d) {
            return x(d.x);
        })
        .attr("y", function (d) {
            return y(d.y + d.y0);
        })
        .attr("height", function (d) {
            return y(d.y0) - y(d.y + d.y0);
        })
        .attr("width", x.rangeBand());

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0)")
        .call(yAxis);
}



export default ({ ...props }) => {
    useEffect(() => barsStacked(props))
    return (
        <Fragment>
            <div className={"chart-container barsStacked " + props.ID}><svg /></div>
        </Fragment>
    )
}
