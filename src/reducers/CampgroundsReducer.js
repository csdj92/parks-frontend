const campgroundsReducer = (state = { campgrounds: [], loading: false }, action) => {
    switch(action.type){

        case "LOADING_CAMPGROUNDS":
            return {
                ...state,
                campgrounds: [...state.campgrounds],
                loading: true
            }

        case "ADD_CAMPGROUNDS":
            
            return {
                ...state,
                campgrounds: action.campgrounds,
                loading: false
            }



        default:
            return state;
        }
}

export default campgroundsReducer;