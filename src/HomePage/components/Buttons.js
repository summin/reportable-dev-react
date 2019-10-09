import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import cuid from 'cuid'
import {getContentFocus} from '../actions'

const buttons = ({ ...props }) => {

    let group = [];
    let sections = ["Unassigned A", "Unassigned B"];
    const buttonRow = (n, s) => {
        const buttons = [];
        let i, label;
        const generate = () => {
            for (i = 1; i < 2; ++i) {
                label = sections[n]
                buttons.push(
                    <Button
                        key={cuid()}
                        className="mt-1 border btn-responsive"
                        size="sm"
                        variant="light"
                        block
                        value={label}
                        onClick="a">
                        {label}
                    </Button>)
            }
        }
        generate();
        return buttons;
    }

    let i, r, modulo;
    props.contentLoaded == "days" ? (r = 25) && (modulo = 6) : (r = sections.length) && (modulo = 1);
    for (i = 0; i < r; ++i)
        if (i % modulo == 0) {
            group.push(
                <ButtonGroup
                    key={cuid()}>
                    {buttonRow(i)}
                </ButtonGroup>);
        }

    return (
        <div key={cuid()} className="d-flex ml-auto mr-auto mt-lg-0 flex-column">
            {group}
        </div>
    )
}

export default connect()(buttons)