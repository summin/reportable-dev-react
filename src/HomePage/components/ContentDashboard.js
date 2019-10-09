import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ChartPie from '../../Elements/ChartPie'
import BarsX from '../../Elements/BarsX'
import Bars from '../../Elements/Bars'
import BarFullStacked from '../../Elements/DX/BarFullStacked'
import BarsStacked from '../../Elements/BarsStacked'
import BarsXStacked from '../../Elements/BarsXStacked'
import Tip from './Primitives/Tip'
import Jumbo from './Primitives/Jumbo'


const barsXdata = [
    {
        language: 'Rust',
        value: 78.9,
        color: '#000000'
    },
    {
        language: 'Kotlin',
        value: 75.1,
        color: '#00a2ee'
    },
    {
        language: 'Python',
        value: 68.0,
        color: '#fbcb39'
    }
];

const barsXdata1 = [
    {
        language: 'Rust',
        value: 78.9,
        color: '#000000'
    },
    {
        language: 'Python',
        value: 68.0,
        color: '#fbcb39'
    }
];

const chartData = {
    "Year 4": 0.5,
    "Year 2": 0.5,
    "Year 5": 0.22

}

const chartData1 = {
    "Year 1, Micrsoft, OS \n and other services": 0.5,
    "Year 5": 0.1
}

const chartStyle = {
    w: 300,
    h: 200,
    inrad: 0.6,
    labels: true
}

const barxStyle = {
    w: 600,
    h: 400,
    inrad: 0.4,
    labels: true,
    title: "Title",
    yTitle: "yTitle",
    xTitle: "xTitle",
    source: "Source"

}

let barsData = [Math.floor(Math.random() * 100)]



export default () => {

    return (

        <Fragment>
            <div style={{'background': "#efeff5"}}>
            <h1 class="display-4 font-weight-lighter text-center text-dark">Summary Dashboard</h1>

            <Row className="mt-5">
                <Col className="d-flex justify-content-end flex-row">
                    <Col className="d-flex justify-content-start flex-column">
                        <Tip title="AMOUNT OF CONTRACTS" type="lg" value="20,000" prepend="" textType="cap" icon="faFileAlt" iconcol="white" bg="#51bfc4" loading={false} />
                        <Tip title="REVENUES: THE NEXT 12 MONTH" type="lg" value="20,000" prepend="$" textType="cap" icon="faFileSignature" iconcol="white" bg="#51bfc4" loading={false} />
                        <Tip title="ADDRESABLE SPEND IN 2020" type="lg" value="20,000" prepend="$" textType="cap" icon="faMoneyCheckAlt" iconcol="white" bg="#51bfc4" loading={false} />

                    </Col>
                    <Col className="d-flex justify-content-start flex-column">
                        <Tip title="TOTAL CONTRACT VALUE" type="lg" value="20,000" prepend="$" textType="cap" icon="faSignal" iconcol="white" bg="#51bfc4" loading={false} />
                        <Tip title="COSTS: THE NEXT 12 MONTH" type="lg" value="20,000" prepend="$" textType="cap" icon="faSignal" iconcol="white" bg="#51bfc4" loading={false} />
                        <Tip title="TOTAL OPX/CAPX RATIO" type="lg" value="0.36" prepend="Bars" textType="cap" icon="faSignal" iconcol="white" bg="#51bfc4" loading={false} />
                    </Col>
                </Col>
                <Col lg={4} className="d-flex justify-content-start flex-row">
                    <Jumbo
                        jumbo="9"
                        bg="#993366"
                        loading={false}
                        title="Contracts to Review"
                        text="Please, reveiw the contracts"
                        button="Contracts"
                        width="12rem" />
                    <Jumbo
                        jumbo="9"
                        bg="#993366"
                        loading={false}
                        title="Contracts to Review"
                        text="Please, reveiw the contracts"
                        button="Contracts"
                        width="12rem" />
                </Col>
            </Row>
            <Container>
                <Row className="mt-5">


                    <Col lg={3} className="d-flex flex-column justify-content-around">
                        <Tip title="STATUS OF CONTRACTS" type="lg" prepend="$" textType="cap" icon="faSyncAlt" iconcol="#666699" bg loading={false} />
                        <ChartPie key={1} ID={"a"} data={chartData} style={chartStyle} /> </Col>
                    <Col lg={3} className="d-flex flex-column justify-content-around">
                        <Tip title="CONTRACTS BY INDUSTRY" type="lg" prepend="$" textType="cap" icon="faLayerGroup" iconcol="#666699" bg loading={false} />
                        <ChartPie key={1} ID={"b"} data={chartData} style={chartStyle} /> </Col>
                    <Col lg={3} className="d-flex flex-column justify-content-around">
                        <Tip title="CONTRACTS BY AMOUNT" type="lg" prepend="$" textType="cap" icon="faChartBar" iconcol="#666699" bg loading={false} />
                        <ChartPie key={1} ID={"c"} data={chartData} style={chartStyle} /> </Col>
                    <Col lg={3} className="d-flex flex-column justify-content-around">
                        <Tip title="CONTRACTS BY CATEGORY" type="lg" prepend="$" textType="cap" icon="faSitemap" iconcol="#666699" bg loading={false} />
                        <ChartPie key={1} ID={"d"} data={chartData} style={chartStyle} /> </Col>
                </Row>
            </Container>
            <Row>
                <Col lg={6}>
                    <BarFullStacked /></Col>
                <Col lg={6}>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">CRN</th>
                                <th scope="col">Title</th>
                                <th scope="col">Business Partn.</th>
                                <th scope="col">Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1322</th>
                                <td>First Contract</td>
                                <td>Microsoft</td>
                                <td><Bars ID={"c"} data={barsData} style={chartStyle} /></td>
                            </tr>
                            <tr>
                                <th scope="row">24242</th>
                                <td>Second</td>
                                <td>Thornton</td>
                                <td><Bars ID={"d"} data={barsData} style={chartStyle} /></td>
                            </tr>
                            <tr>
                                <th scope="row">1322</th>
                                <td>First Contract</td>
                                <td>Microsoft</td>
                                <td><Bars ID={"e"} data={barsData} style={chartStyle} /></td>
                            </tr>
                            <tr>
                                <th scope="row">24242</th>
                                <td>Second</td>
                                <td>Thornton</td>
                                <td><Bars ID={"g"} data={barsData} style={chartStyle} /></td>
                            </tr>
                            <tr>
                                <th scope="row">1322</th>
                                <td>First Contract</td>
                                <td>Microsoft</td>
                                <td><Bars ID={"h"} data={barsData} style={chartStyle} /></td>
                            </tr>
                            <tr>
                                <th scope="row">24242</th>
                                <td>Second</td>
                                <td>Thornton</td>
                                <td><Bars ID={"i"} data={barsData} style={chartStyle} /></td>
                            </tr>

                        </tbody>
                    </table>

                </Col>
            </Row>
            </div>
        </Fragment>

    )
}