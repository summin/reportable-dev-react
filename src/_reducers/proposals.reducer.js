import { proposalConstants } from '../_constants';

export function proposals(state = {}, action) {
    switch (action.type) {
        case proposalConstants.SUBMIT_REQUEST || proposalConstants.GET_REQUEST:
            return {
                loading: true
            };
        case proposalConstants.SUBMIT_SUCCESS:
            return {
                loading: false
            };
        case proposalConstants.GET_SUCCESS:
            return {
                loading: false,
                proposals: action.res
            };
        case proposalConstants.SUBMIT_FAILURE || proposalConstants.GET_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}