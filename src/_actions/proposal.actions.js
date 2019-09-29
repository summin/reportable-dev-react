import { proposalConstants } from '../_constants';
import { proposalService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const proposalActions = {
    submit,
};

function submit(proposal) {
    console.log(proposal)
    return dispatch => {
        dispatch(request());

        proposalService.submit(proposal)
            .then(
                proposal => dispatch(success(proposal)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: proposalConstants.SUBMIT_REQUEST } }
    function success(users) { return { type: proposalConstants.SUBMIT_SUCCESS, users } }
    function failure(error) { return { type: proposalConstants.SUBMIT_FAILURE, error } }
}