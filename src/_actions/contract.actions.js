import { contractConstants } from '../_constants';
import { contractService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const contractActions = {
    submit,
    get
};

// get

function get(attr) {
    return dispatch => {
        dispatch(request());

        contractService.get(attr)
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(alertActions.clear());
                    dispatch(alertActions.success(`Received ${res.length} items`));
                },

                error => {
                    dispatch(failure(error.toString())),
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: contractConstants.GET_REQUEST } }
    function success(res) { return { type: contractConstants.GET_SUCCESS, res } }
    function failure(error) { return { type: contractConstants.GET_FAILURE, error } }
}

// SUBMIT

function submit(contract) {

    return dispatch => {
        dispatch(request());
        contractService.submit(contract)
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(alertActions.clear());
                    dispatch(alertActions.success(`contract N° ${contract.dbContractReferenceNumber} Submitted`));
                },

                error => {
                    dispatch(failure(error.toString())),
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: contractConstants.SUBMIT_REQUEST, contract } }
    function success(contract) { return { type: contractConstants.SUBMIT_SUCCESS, contract } }
    function failure(error) { return { type: contractConstants.SUBMIT_FAILURE, error } }
}