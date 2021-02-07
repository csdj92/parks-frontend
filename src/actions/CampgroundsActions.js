export const fetchCampgrounds = () => {
    return(dispatch) => {
        dispatch({ type: 'LOADING_CAMPGROUNDS'})
        fetch('http://localhost:3000/campgrounds')
            .then(response => { return response.json() })
            .then(data => { dispatch({ type: "ADD_CAMPGROUNDS", campgrounds: data })})
    }
}