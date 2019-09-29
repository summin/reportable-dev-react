import { proposalConstants } from '../_constants';

export function proposals(state = {}, action) {
  switch (action.type) {
    case proposalConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case proposalConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case proposalConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case proposalConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(proposal =>
            proposal.id === action.id
            ? { ...proposal, deleting: true }
            : proposal
        )
      };
    case proposalConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => proposal.id !== action.id)
      };
    case proposalConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(proposal => {
          if (proposal.id === proposal.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...proposalCopy } = proposal;
            // return copy of user with 'deleteError:[error]' property
            return { ...proposalCopy, deleteError: action.error };
          }

          return proposal;
        })
      };
    default:
      return state
  }
}