const parksReducer = (state =
    { parks: [],
    reviews:[], loading: false }, action) => {
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

            
        case 'ADD_REVIEW': 
        return {
            ...state,
                parks: action.parks,
                loading: false
    }

    case 'REVIEW_ADDED':
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