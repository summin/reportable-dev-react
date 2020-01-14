import { contractConstants } from '../_constants';
import { contractsService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const contractActions = {
    submit,
    modify,
    get
};

function submit(contracts) {

    return dispatch => {
        dispatch(request());
        contractsService.submit(contracts)
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(alertActions.clear());
                    dispatch(alertActions.success(`Contract ${""} Submitted`));
                },

                error => {
                    dispatch(failure(error.toString())),
                        dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: contractConstants.SUBMIT_REQUEST, contracts } }
    function success(contracts) { return { type: contractConstants.SUBMIT_SUCCESS, contracts } }
    function failure(error) { return { type: contractConstants.SUBMIT_FAILURE, error } }
}

function get(attr) {
    return dispatch => {

        dispatch(request());

        contractsService.get(attr)
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

function modify(contracts) {
    return dispatch => {

        dispatch(request());

        contractsService.modify(contracts)
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(alertActions.clear());
                    dispatch(alertActions.success(`Successfully Modified`));
                },

                error => {
                    dispatch(failure(error.toString())),
                        dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: contractConstants.MODIFY_REQUEST } }
    function success(res) { return { type: contractConstants.MODIFY_SUCCESS, res } }
    function failure(error) { return { type: contractConstants.MODIFY_FAILURE, error } }
}


// SUBMIT

