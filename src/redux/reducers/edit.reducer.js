const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_HIKE' :
            console.log(action.payload)
            return action.payload;
        case 'EDIT_ON_CHANGE':
            return {...state, [action.payload.property]: action.payload.value}
        case 'CLEAR_EDIT':
            return {};
        default: 
            return state;
    }
}

export default editReducer;