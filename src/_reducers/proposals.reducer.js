import { proposalConstants } from '../_constants';

export function proposals(state = {}, action) {
  switch (action.type) {
    case proposalConstants.SUBMIT_REQUEST:
      return {
        loading: true
      };
    case proposalConstants.SUBMIT_SUCCESS:
      return {
        items: action.users
      };
    case proposalConstants.SUBMIT_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}