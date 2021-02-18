export const addReview = (parks) => {
        return (dispatch) => {
        dispatch({ type: 'ADD_REVIEW' })
        fetch('http://localhost:3000/parks', {
            method: 'POST',
            body: JSON.stringify(parks),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(park => { 
            return dispatch({ type:'REVIEW_ADDED', park:park })
        })
    }
}