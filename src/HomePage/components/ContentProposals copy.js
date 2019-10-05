import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';

import { proposalActions } from '../../_actions'



function ContentApprovals({ ...props }) {

    const { user, alert, proposals } = props;
    const list = proposals.proposals;

    const columns = [
        {
            id: 'dbProjectorInitiativeTitle',
            label: 'Project or Initiative Title',
            minWidth: 120,
        },
        {
            id: 'dbContractReferenceNumber',
            label: 'Contract Reference Number',
            minWidth: 60,
        },
        {
            id: 'dbDateOfRequest',
            label: 'Date of Request',
            minWidth: 100,
        },
        {
            id: 'dbRequestorFullName',
            label: 'Requestor Full Name',
            minWidth: 120,

        },
        {
            id: 'dbITCommodityCategory',
            label: 'IT Commodity Category',
            minWidth: 120,
        },

    ];

    function createData(
        dbProjectorInitiativeTitle,
        dbContractReferenceNumber,
        dbDateOfRequest,
        dbRequestorFullName,
        dbITCommodityCategory) {
        return { dbProjectorInitiativeTitle,
            dbContractReferenceNumber,
            dbDateOfRequest,
            dbRequestorFullName,
            dbITCommodityCategory};
    }

    !list && props.get("");

    const rows = [];

    list && list.map((i) => {
        rows.push(
            createData(
                i.dbProjectorInitiativeTitle,
                i.dbContractReferenceNumber,
                i.dbcreatedDate,
                i.dbRequestorFullName,
                i.dbITCommodityCategory)
        )
    })

    const useStyles = makeStyles({
        root: {
            width: '100%',
            flexGrow: 1
        },
        tableWrapper: {
            maxHeight: "100%",
            overflow: 'auto',
        },
    });

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    return (
        <Fragment>

            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table stickyHeader>
                        {!list 
                        ?
                        <div className={classes.root}>
                            <LinearProgress color="primary" />
                        </div>
                        :
                        <TableHead>
                            <TableRow>
                                {columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>}
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                                return (<a href="">
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map(column => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    
                                                </TableCell>
                                                
                                            );
                                        })}
                                    </TableRow>
                                    </a>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[10, 20]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </Fragment>
    );
}

const mapsStateToProps = (state) => {
    const { alert, proposals } = state;
    const { user } = state.authentication;
    return { user, alert, proposals }
}

const actionCreators = {

    get: proposalActions.get,
};

export default connect(mapsStateToProps, actionCreators)(ContentApprovals)