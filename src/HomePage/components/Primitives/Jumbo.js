import React, { Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';


export default ({ ...props }) => {

    const { jumbo, bg, loading, title, text, button, width } = props
    return (
        <Fragment>
            <div className="card m-2 rounded-lg" style={{ "width": width, "color": "white", "backgroundColor": bg}}>
                <div className="text-center mt-3">
                    <h1 className="display-4 font-weight-bolder" style={{"color": "white"}}>{jumbo ? jumbo : <CircularProgress/>}</h1> </div>
                <div className="card-body">
                <button className="btn btn-light btn-block">{button}</button>
                    <p className="text-center card-text mt-2">{text}</p>
                    
                </div>
            </div>
        </Fragment>
    )
}