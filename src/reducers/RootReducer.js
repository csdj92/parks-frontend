import { combineReducers } from 'redux'
import parksReducer from './parksReducer'
import campgroundsReducer from './CampgroundsReducer'

const rootReducer = combineReducers({
parksReducer,
campgroundsReducer
});

export default rootReducer




