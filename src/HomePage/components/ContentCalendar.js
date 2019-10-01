import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table'
// import Calendar from './calendar'
// import BarChart from './d3/BarChart'

export default class Calendar extends Component  {

    componentDidMount() {
        // setTimeout(() => {document.getElementsByClassName("header", "bg-white")[0].style.display = "none";}, 1000)
        
    }

    render() {
    return (
        <div>
        <h1> under construction... </h1>
        <iframe src="https://ui.toast.com/tui-calendar" style = {{"width": "1400px", "height": "9800px"}}> </iframe>
        </div>
    )
    }
}