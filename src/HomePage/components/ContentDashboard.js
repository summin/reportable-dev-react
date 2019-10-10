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



const chartStyle = {
    w: 570,
    h: 150,
    inrad: 0.6,
    labels: true
}



let barsData = [Math.floor(Math.random() * 100)]



const ContentDashboard = ({ ...props }) => {

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
            return ((value2 / value1).toPrecision(3))
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

    const chartData = (type, data) => {

        if (type == "byOwner") {
            let dataChart = {}
            data && data.map((i) => {
                dataChart[i.dbBusinessOwner] = "";
            })
            Object.keys(dataChart).map((i) => {
                data && data.map((j) => {
                    j.dbBusinessOwner == i && ++dataChart[i];
                })

            })
            return dataChart
        }

        if (type == "byCategory") {
            let dataChart = {}
            data && data.map((i) => {
                dataChart[i.dbSpendCategory] = "";
            })
            Object.keys(dataChart).map((i) => {
                data && data.map((j) => {
                    j.dbSpendCategory == i && ++dataChart[i];
                })

            })
            let newData = {}

            Object.keys(dataChart).map((i) => {
                console.log(newData)
                newData[i + " " + dataChart[i]] = dataChart[i]
            })

            return newData
        }

        if (type == "byYearsAmount") {
            let dataChart = {
                dbY1: 0,
                dbY2: 0,
                dbY3: 0,
                dbY4: 0,
                dbY5: 0
            }
            data && data.map((i) => {
                Object.keys(dataChart).map((j) => {
                    dataChart[j] = dataChart[j] + i[j]
                })
            })

            let newData = {
                ["$ " + formatNumber(dataChart.dbY1) + " - 2019"]: dataChart.dbY1,
                ["$ " + formatNumber(dataChart.dbY2) + " - 2020"]: dataChart.dbY2,
                ["$ " + formatNumber(dataChart.dbY3) + " - 2021"]: dataChart.dbY3,
                ["$ " + formatNumber(dataChart.dbY4) + " - 2022"]: dataChart.dbY4,
                ["$ " + formatNumber(dataChart.dbY5) + " - 2023"]: dataChart.dbY5,
            }
            return newData
        }

        if (type == "byCategoryAmount") {
            let dataChart = {}
            data && data.map((i) => {
                dataChart[i.dbSpendCategory] = i.dbY1 + i.dbY2 + i.dbY3 + i.dbY4 + i.dbY5 + (dataChart[i.dbSpendCategory] ? dataChart[i.dbSpendCategory] : 0);
            })

            let newData = {}

            Object.keys(dataChart).map((i) => {
                console.log(newData)
                newData[i + " $ " + ((dataChart[i] / 1000000000).toPrecision(2)) + "B"] = dataChart[i]
            })

            return newData
        }



    }


    return (

        <Fragment>
            <Container>
                <div style={{}}>
                    <h1 class="display-4 font-weight-lighter text-center text-dark">Summary Dashboard</h1>

                    <Row className="mt-5">

                        <Col sm={4}>
                            <Tip title="AMOUNT OF CONTRACTS" type="lg" value={amountOfContracts()} prepend="" textType="cap" icon="faFileAlt" iconcol="white" bg="#51bfc4" loading={!amountOfContracts()} />
                            <Tip title="COST: THE NEXT 12 MONTH" type="lg" value={theNext12Months()} prepend="$" textType="cap" icon="faFileSignature" iconcol="white" bg="#51bfc4" loading={!theNext12Months()} />
                            <Tip title="ADDRESABLE SPEND IN 2020" type="lg" value={addressable12Months()} prepend="$" textType="cap" icon="faMoneyCheckAlt" iconcol="white" bg="#51bfc4" loading={!addressable12Months()} />

                        </Col>
                        <Col sm={4}>
                            <Tip title="TOTAL CONTRACT VALUE" type="lg" value={totalContractValue()} prepend="$" textType="cap" icon="faSignal" iconcol="white" bg="#51bfc4" loading={!totalContractValue()} />
                            <Tip title="COSTS: THE NEXT 12 MONTH" type="lg" value={theNext12Months("sub")} prepend="$" textType="cap" icon="faSignal" iconcol="white" bg="#51bfc4" loading={!addressable12Months()} />
                            <Tip title="TOTAL REV/COST RATIO" type="lg" value={ratio()} prepend="Bars" textType="cap" icon="faSignal" iconcol="white" bg="#51bfc4" loading={false} />
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex flex-direction-row">
                                <Jumbo
                                    jumbo={amountOfProposals()}
                                    bg="#993366"
                                    loading={false}
                                    title="New Proposals"
                                    text="... to be reviewed by..."
                                    button="Proposals"
                                    width="9rem" />
                                <Jumbo
                                    jumbo="9"
                                    bg="#993366"
                                    loading={false}
                                    title="Contracts to Review"
                                    text="... to be reviewed by..."
                                    button="Contracts"
                                    width="9rem" />
                            </div>

                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={6} >
                            <Tip title="CONTRACTS BY OWNER" type="lg" prepend="$" textType="cap" icon="faSyncAlt" iconcol="#666699" bg loading={false} />
                            <ChartPie key={1} ID={"a"} data={chartData("byOwner", contracts)} style={chartStyle} /> </Col>
                        <Col lg={6}>
                            <Tip title="YEARS BY AMOUNT $" type="lg" prepend="$" textType="cap" icon="faLayerGroup" iconcol="#666699" bg loading={false} />
                            <ChartPie key={1} ID={"b"} data={chartData("byYearsAmount", contracts)} style={chartStyle} /> </Col>
                        <Col lg={6}>
                            <Tip title="CATEGORY BY AMOUNT $/5Y" type="lg" prepend="$" textType="cap" icon="faChartBar" iconcol="#666699" bg loading={false} />
                            <ChartPie key={1} ID={"c"} data={chartData("byCategoryAmount", contracts)} style={chartStyle} /> </Col>
                        <Col lg={6}>
                            <Tip title="CONTRACTS BY CATEGORY" type="lg" prepend="$" textType="cap" icon="faSitemap" iconcol="#666699" bg loading={false} />
                            <ChartPie key={1} ID={"d"} data={chartData("byCategory", contracts)} style={chartStyle} /> </Col>
                    </Row>
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
            </Container>
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