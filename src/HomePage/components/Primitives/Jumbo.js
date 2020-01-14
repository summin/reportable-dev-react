import React, { Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';


export default ({ ...props }) => {

    const { jumbo, bg, loading, title, text, button, width } = props
    return (
        <Fragment>
            <div className='border-left border-bottom rounded rounded-lg m-2 d-flex flex-row'>
            <h2 className='ml-2'>{jumbo}</h2>
            <a className="text-success pt-2 mx-1 ">{button} </a>
                    <p className="text-center text-nowrap mr-2 pt-2">{text}</p>
                <a className="text-success text-nowrap pt-2 mx-1 ">{button == 'Contracts' ? "10 Users" : button == 'Proposals' ? "2 Users" : button=='Comments' ? "43 Users" : ''} </a>
            </div>

        </Fragment>
    )
}