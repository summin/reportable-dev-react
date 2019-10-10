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
import { contractActions } from '../../_actions'
import TableConfig from './contentHelpers/contractsFormConfig.json'


function ContentApprovals({ ...props }) {

    const { user, alert, proposals, contracts } = props;
    const list = contracts.contracts;

    TableConfig

    let columns = [];

    Object.keys(TableConfig).map((i) => {
        columns.push({id: i, label: TableConfig[i].name})
    })


    function createData({...a}) {
        return a;
    }

    !list && props.get("");

    const rows = [];

    list && list.map((i) => {
        rows.push(
            createData(i)
        )
    })

    const useStyles = makeStyles({
        root: {
            width: '100%',
            flexGrow: 1,
            marginBottom: '70px',
            marginTop: '5px'
        },
        tableWrapper: {
            maxHeight: "100%",
            overflow: 'auto',
            cursor: 'pointer'
        },
        pagination: {
            width: '100%',
            position: 'fixed',
            bottom: '0',
            right: '0',
            backgroundColor: "rgb(133, 126, 126)"
        },
        
    });

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    const onClick = (e) => {
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
                        <TableHead  className="cursorDefault">
                            <TableRow>
                                {columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>}
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                                return (
                                    <TableRow  onClick={onClick} hover role="checkbox" tabIndex={-1}>
                                        {columns.map(column => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell className="cursorHand" key={column.id} value={row.dbContractReferenceNumber}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    
                                                </TableCell>
                                                
                                            );
                                        })}
                                    </TableRow>
                                
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    className={classes.pagination}
                    rowsPerPageOptions={[10, 20, 200]}
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
    const { alert, proposals, contracts } = state;
    const { user } = state.authentication;
    return { user, alert, proposals, contracts }
}

const actionCreators = {

    get: contractActions.get,
};

export default connect(mapsStateToProps, actionCreators)(ContentApprovals)