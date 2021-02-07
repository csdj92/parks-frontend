const parksReducer = (state = { parks: [], loading: false }, action) => {
    switch(action.type){

        case "LOADING_PARKS":
            return {
                ...state,
                parks: [...state.parks],
                loading: true
            }

        case "ADD_PARKS":
            
            return {
                ...state,
                parks: action.parks,
                loading: false
            }



        default:
            return state;
        }
}

export default parksReducer;