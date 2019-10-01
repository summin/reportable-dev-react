import { proposalConstants } from '../_constants';
import { proposalService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const proposalActions = {
    submit,
};

function submit(proposal) {

    return dispatch => {
        dispatch(request());

        proposalService.submit(proposal)
            .then(
                proposal => {
                    dispatch(success(proposal))
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