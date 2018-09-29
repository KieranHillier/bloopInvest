import { combineReducers } from 'redux'
import userProfile from './userProfile'
import temporary from './temporary'

export default combineReducers({
    userProfile,
    temporary
})