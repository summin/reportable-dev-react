import { dashboardConstants } from '../_constants';
import { contractsService } from '../_services';
import { alertActions } from '.';

export const dashboardActions = {
    submit,
    modify,
    get
};

function submit(dashboards) {

    return dispatch => {
        dispatch(request());
        contractsService.submit(dashboards)
            .then(
                res => {
                    dispatch(success(res));
                    dispatch(alertActions.clear());
                    dispatch(alertActions.success(`dashboard ${""} Submitted`));
                },

                error => {
                    dispatch(failure(error.toString())),
                        dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: dashboardConstants.SUBMIT_REQUEST, dashboards } }
    function success(dashboards) { return { type: dashboardConstants.SUBMIT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.SUBMIT_FAILURE, error } }
}

function get(attr) {
    console.log('touched')
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

    function request() { return { type: dashboardConstants.GET_REQUEST } }
    function success(res) { return { type: dashboardConstants.GET_SUCCESS, res } }
    function failure(error) { return { type: dashboardConstants.GET_FAILURE, error } }
}

function modify(dashboards) {
    return dispatch => {

        dispatch(request());

        contractsService.modify(dashboards)
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

    function request() { return { type: dashboardConstants.MODIFY_REQUEST } }
    function success(res) { return { type: dashboardConstants.MODIFY_SUCCESS, res } }
    function failure(error) { return { type: dashboardConstants.MODIFY_FAILURE, error } }
}


// SUBMIT

