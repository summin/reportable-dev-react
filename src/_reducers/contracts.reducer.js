import { contractConstants } from '../_constants';

export function contracts(state = {}, action) {
    switch (action.type) {
        case contractConstants.SUBMIT_REQUEST || contractConstants.GET_REQUEST:
            return {
                loading: true
            };
        case contractConstants.SUBMIT_SUCCESS:
            return {
                loading: false
            };
        case contractConstants.GET_SUCCESS:
            return {
                loading: false,
                contracts: action.res
            };
        case contractConstants.SUBMIT_FAILURE || contractConstants.GET_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}