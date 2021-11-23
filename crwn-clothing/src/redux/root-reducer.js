// modules
import { combineReducers } from 'redux'

// components
import userReducer from './user/user.reducer'

export default combineReducers({
  user: userReducer,
})
