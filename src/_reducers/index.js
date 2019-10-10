import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { proposals } from './proposals.reducer';
import { contracts } from './contracts.reducer';
import { alert } from './alert.reducer';
import { content, header, footer } from '../HomePage/reducers'


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  proposals,
  contracts,
  alert,
  content, 
  header, 
  footer
});

export default rootReducer;