import { combineReducers } from 'redux'
import parksReducer from './parksReducer'
import campgroundsReducer from './CampgroundsReducer'
import parksReviewReducer from './ParkReviewReducer'

const rootReducer = combineReducers({
parksReducer,
campgroundsReducer,
parksReviewReducer
});

export default rootReducer




