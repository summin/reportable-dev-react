import { dashboardConstants } from '../_constants';

export function dashboard(state = {}, action) {
    switch (action.type) {
        case dashboardConstants.SUBMIT_REQUEST || dashboardConstants.GET_REQUEST:
            return {
                loading: true
            };
        case dashboardConstants.SUBMIT_SUCCESS:
            return {
                loading: false
            };
        case dashboardConstants.GET_SUCCESS:
            return {
                loading: false,
                dashboard: action.res
            };
        case dashboardConstants.SUBMIT_FAILURE || dashboardConstants.GET_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}