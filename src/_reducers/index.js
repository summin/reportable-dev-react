import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { proposals } from './proposals.reducer';
import { contracts } from './contracts.reducer';
import { alert } from './alert.reducer';
import { dashboard } from './dashboard.reducer';
import { content, nav } from './content.reducer'


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  proposals,
  contracts,
  alert,
  dashboard,
  content,
  nav
});

export default rootReducer;