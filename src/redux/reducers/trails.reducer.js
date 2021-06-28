
const trailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRAILS':
            return action.payload;

        default:
            return state;
    }
}


export default trailsReducer;