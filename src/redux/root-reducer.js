//root reducer - combines all states
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

//full state in redux - one big json object
//      keys -  individual slices of state
export default combineReducers({
    user: userReducer
});