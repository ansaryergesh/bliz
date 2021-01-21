import {combineReducers} from 'redux'
import usersReducer from './userReducer'
import messageReducer from './messageReducer'

export default combineReducers({
    usersReducer,
    messageReducer,
})