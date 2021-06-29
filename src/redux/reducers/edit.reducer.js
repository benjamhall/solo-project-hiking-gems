const editReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_HIKE' :
            return action.payload;
    }
}

export default editReducer;