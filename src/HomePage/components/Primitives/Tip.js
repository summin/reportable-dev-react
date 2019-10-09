import React, { Fragment } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import ChartPie from '../../../Elements/ChartPie'
import Dough from '../../../Elements/DX/Dough'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserCircle,
    faEnvelope,
    faChartArea,
    faChartBar,
    faChartLine,
    faChartPie,
    faCheck,
    faShareSquare,
    faCalendarAlt,
    faCalendarCheck,
    faFileSignature,
    faFileAlt,
    faProjectDiagram,
    faSignal,
    faSyncAlt,
    faLayerGroup,
    faSitemap,
    faList,
    faMoneyCheckAlt
} from '@fortawesome/free-solid-svg-icons'

const awesomes = {

    faUserCircle: faUserCircle,
    faEnvelope: faEnvelope,
    faChartArea: faChartArea,
    faCheck: faCheck,
    faShareSquare: faShareSquare,
    faCalendarAlt: faCalendarAlt,
    faCalendarCheck: faCalendarCheck,
    faFileSignature: faFileSignature,
    faFileAlt: faFileAlt,
    faChartBar: faChartBar,
    faChartLine: faChartLine,
    faProjectDiagram: faProjectDiagram,
    faSignal: faSignal,
    faChartPie: faChartPie,
    faSignal: faSignal,
    faSyncAlt:    faSyncAlt,
    faLayerGroup:    faLayerGroup,
    faSitemap: faSitemap,
    faList: faList,
    faMoneyCheckAlt: faMoneyCheckAlt

}

const chartData = {
    "Year 4": 0.8,
    "Year 2": 0.2,
}

const chartStyle = {
    w: 200,
    h: 100,
    inrad: 0.6,
    labels: false,
    "position": "absolute",
    "top": "0",
    "right": "0"
}

export default ({ ...props }) => {

    const { title, type, icon, iconcol, bg, textType, prepend, loading, value } = props
    const getAwesome = (x) => {
        let y = eval("faShareSquare")
        return y
    }

    return (
        <Fragment>
            <div className="d-flex flex-row">
            {prepend === "Bars" ? <Dough height="61" width="61" /> : 
                <FontAwesomeIcon style={{
                    "color": iconcol,
                    "backgroundColor": bg,
                    "borderStyle": "none",
                    "borderRadius": "30px",
                    "width": "60px",
                    "height": "60px",
                    "padding": "15px"
                }}
                    icon={awesomes[icon]} size="sm" />}
                <div className={"d-flex flex-column ml-3 " + (!value && " mt-3")}>
                    <h5 className="font-weight-bolder"> {title} </h5>
                    {loading 
                    ? <LinearProgress  style={{
                        "width": "100px",
                        "height": "5px",
                        "padding": "1px"
                    }} /> 
                    : 
                    value && <h3 style={{"color": bg}}>{(!(prepend === "Bars") ? prepend : "") + value} </h3>}
                </div>
            </div>
        </Fragment>
    )
}