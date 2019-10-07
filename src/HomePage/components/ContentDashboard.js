import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import ChartPie from '../../Elements/ChartPie'
import BarsX from '../../Elements/BarsX'
import Bars from '../../Elements/Bars'
import F from '../../Elements/F'

const chartData = {
    "Year 1, Micrsoft, OS \n and other services": 0.5,
    "Year 2": 0.2,
    "Year 4": 1.8,
    "Year 5": 0.1
}

const chartStyle = {
    w: 300,
    h: 200
}

export default () => {
    return (
        <Fragment>
            <ChartPie data={chartData} style={chartStyle} />
            <Bars/>
            <BarsX/>
            <F/>
        </Fragment>
    )
}