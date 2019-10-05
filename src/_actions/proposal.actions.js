import { proposalConstants } from '../_constants';
import { proposalService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const proposalActions = {
    submit,
    get
};

// get

function get(attr) {
    return dispatch => {
        dispatch(request());

        proposalService.get(attr)
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

    function request() { return { type: proposalConstants.GET_REQUEST } }
    function success(res) { return { type: proposalConstants.GET_SUCCESS, res } }
    function failure(error) { return { type: proposalConstants.GET_FAILURE, error } }
}

// SUBMIT

function submit(proposal) {

    return dispatch => {
        dispatch(request());

        proposalService.submit(proposal)
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(alertActions.clear());
                    dispatch(alertActions.success(`Proposal N° ${proposal.dbContractReferenceNumber} Submitted`));
                },

                error => {
                    dispatch(failure(error.toString())),
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: proposalConstants.SUBMIT_REQUEST, proposal } }
    function success(proposal) { return { type: proposalConstants.SUBMIT_SUCCESS, proposal } }
    function failure(error) { return { type: proposalConstants.SUBMIT_FAILURE, error } }
}