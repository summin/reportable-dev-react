import React, { Fragment, useState } from 'react'
import Table from 'react-bootstrap/Table'


const TableEditable = ({ ...props }) => {

    const entries = props.entries
    const editEntry = props.editEntry
    const config = props.config

    return (
        <Table responsive>
            <thead>
            <tr>
                {Object.values(config).map((i) =>
                    <th className={i.weak && "d-md-table-cell d-none"}>{i.name}</th>
                )}
            </tr>
            </thead>
            <tbody>
            {entries && Object.entries(entries).map(([entriesKey, entriesValue]) => (
                <tr className="cursorPointer" onClick={() => editEntry(entriesValue._id)}>
                    {Object.entries(config).map(([configKey,configValue]) =>
                        <td className={configValue.weak && "d-md-table-cell d-none"}>{entriesValue[configKey]}</td>
                    )}
                </tr>))
            }
            </tbody>
        </Table>

    );
}

export default TableEditable;