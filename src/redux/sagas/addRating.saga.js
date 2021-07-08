import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addRating(action) {
    console.log('in add Rating saga', action.payload)
    try {
        // Axios request to add rating to the user's ratings
        yield axios.post(`/api/rating`, { payload: action.payload });
        console.log('Rating', action.payload)

        // Fetch all of the existing favorites to update DOM
        yield put({ type: 'FETCH_FAVORITES' });

    } catch (error) {
        console.log('Error in add Rating Saga', error);
    }

}

function* addRatingSaga() {
    yield takeLatest('ADD_NEW_RATING', addRating);
}

export default addRatingSaga;