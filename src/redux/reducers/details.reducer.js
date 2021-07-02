// This reducer handles the Hike Details 
const detailsReducer = (state = {}, action) => {
    if (action.type === 'HIKE_DETAILS') {
        return action.payload;
    }
    return state;
}

export default detailsReducer;