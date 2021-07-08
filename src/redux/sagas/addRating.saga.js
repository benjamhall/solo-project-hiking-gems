import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addRating(action) {
    console.log('made it to add Rating saga', action.payload)
    try {
        // Axios request to add hike to the user's favorites
        yield axios.post(`/api/favorite`, { details: action.payload });
        console.log('Favorite', action.payload)

        // Fetch all of the existing favorites to update DOM
        yield put({ type: 'FETCH_FAVORITES' });

    } catch (error) {
        console.log('Error in addFavoriteSaga', error);
    }
}

function* addRatingSaga() {
    yield takeLatest('ADD_NEW_RATING', addRating);
}

export default addRatingSaga;