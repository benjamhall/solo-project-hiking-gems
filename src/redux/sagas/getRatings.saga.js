import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchRatings() {
    
    try {
        // Axios request to get ratings
        const favorites = yield axios.get(`/api/rating/`);
        console.log('get all:', fetchRatings.data);

        // Sends Set ratings to the ratings reducer
        yield put({ type: 'SET_RATINGS', payload: ratings.data });

    } catch(error) {
        console.log('Error in fetch Ratings Saga', error);
    }
}

function* getRatingsSaga() {
    yield takeLatest('FETCH_RATINGS', fetchRatings);
}

export default getRatingsSaga;