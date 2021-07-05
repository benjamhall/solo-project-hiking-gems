import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addFavorite() {
    try {
        // Axios request to add hike to the user's favorites
        yield axios.put(`/api/ratings/favorite`, {hikeId: action.payload});
        console.log('get all:', trails.data);

        yield put({ type: 'FETCH_FAVORITES', payload: action.payload });

    } catch {
        console.log('Error in favoritesSaga', error);
    }
}

function* favoritesSaga() {
    yield takeLatest('ADD_FAVORITE', addFavorite);
}

export default favoritesSaga;