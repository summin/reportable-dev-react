import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ChartPie from '../../Elements/ChartPie'
import Bars from '../../Elements/Bars'
import BarFullStacked from '../../Elements/DX/BarFullStacked'
import Tip from './Primitives/Tip'
import Jumbo from './Primitives/Jumbo'
import { proposalActions } from '../../_actions'
import { contractActions } from '../../_actions'


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
    "Year 4": 1.5,
    "Year 2": 0.5,
    "Year 5": 0.22

}

const chartStyle = {
    w: 300,
    h: 200,
    inrad: 0.6,
    labels: true
}



let barsData = [Math.floor(Math.random() * 100)]



const ContentDashboard = ({...props}) => {

    const { user, alert } = props;
    const contracts = props.contracts.contracts
    const proposals = props.proposals.proposals;

    const amountOfProposals = () => {
        return proposals ? proposals.length : ""
    }

    !contracts && props.getContracts("")
    !proposals && props.getProposals("")
    
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    let amountOfContracts = () => {
        return contracts ? contracts.length : false
    }

    let theNext12Months = (x) => {
        let value = 0;
        if (contracts) {
            contracts.map((i) => {
                value = value + i.dbY1
            })
        if (x=="sub") {
            value=Math.floor(value/1.8)
        }
        return formatNumber(value)
        }
        else return false
    }

    let addressable12Months = () => {
        let value = 0;
        if (contracts) {
            contracts.map((i) => {
                value = value + i.dbY2
            })
        return formatNumber(value)
        }
        else return false
    }

    const ratio = () => {
        let value1 = 0
        let value2 = 0
        if (contracts) {
            contracts.map((i) => {
                value1 = value1 + i.dbY2;
                value2 = value2 + i.dbY1;
            });
            return ((value2/value1).toPrecision(3))
        }
        
        
    }

    let totalContractValue = () => {
        let value = 0;
        if (contracts) {
            contracts.map((i) => {
                value = value + i.dbY1 + i.dbY2 + i.dbY3 + i.dbY4 + i.dbY5 + i.dbY6 + i.dbY7 + i.dbY8
            })
        return formatNumber(value)
        }
        else return false
    }

    return (

        <Fragment>
            <div style={{'background': "#efeff5"}}>
            <h1 class="display-4 font-weight-lighter text-center text-dark">Summary Dashboard</h1>

            <Row className="mt-5">
                <Col className="d-flex justify-content-end flex-row">
                    <Col className="d-flex justify-content-start flex-column">
                        <Tip title="AMOUNT OF CONTRACTS" type="lg" value={amountOfContracts()} prepend="" textType="cap" icon="faFileAlt" iconcol="white" bg="#51bfc4" loading={!amountOfContracts()} />
                        <Tip title="REVENUES: THE NEXT 12 MONTH" type="lg" value={theNext12Months()}prepend="$" textType="cap" icon="faFileSignature" iconcol="white" bg="#51bfc4" loading={!theNext12Months()} />
                        <Tip title="ADDRESABLE SPEND IN 2020" type="lg" value={addressable12Months()}  prepend="$" textType="cap" icon="faMoneyCheckAlt" iconcol="white" bg="#51bfc4" loading={!addressable12Months()} />

                    </Col>
                    <Col className="d-flex justify-content-start flex-column">
                        <Tip title="TOTAL CONTRACT VALUE" type="lg" value={totalContractValue()} prepend="$" textType="cap" icon="faSignal" iconcol="white" bg="#51bfc4" loading={!totalContractValue()} />
                        <Tip title="COSTS: THE NEXT 12 MONTH" type="lg" value={theNext12Months("sub")}  prepend="$" textType="cap" icon="faSignal" iconcol="white" bg="#51bfc4" loading={!addressable12Months()} />
                        <Tip title="TOTAL REV/COST RATIO" type="lg" value={ratio()} prepend="Bars" textType="cap" icon="faSignal" iconcol="white" bg="#51bfc4" loading={false} />
                    </Col>
                </Col>
                <Col lg={4} className="d-flex justify-content-start flex-row">
                    <Jumbo
                        jumbo={amountOfProposals()}
                        bg="#993366"
                        loading={false}
                        title="New Proposals"
                        text="New proposals to be reviewed by..."
                        button="Proposals"
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
                        <Tip title="CONTRACTS BY OWNER" type="lg" prepend="$" textType="cap" icon="faSyncAlt" iconcol="#666699" bg loading={false} />
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


const mapsStateToProps = (state) => {
    const { alert, proposals, contracts } = state;
    const { user } = state.authentication;
    return { user, alert, proposals, contracts }
}

const actionCreators = {

    getProposals: proposalActions.get,
    getContracts: contractActions.get
};

export default connect(mapsStateToProps, actionCreators)(ContentDashboard)