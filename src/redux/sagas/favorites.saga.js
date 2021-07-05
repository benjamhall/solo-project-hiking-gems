import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addFavorite() {
    try {
        yield axios.put('/api/ratings');
        console.log('get all:', trails.data);
        yield put({ type: 'SET_TRAILS', payload: trails.data });

    } catch {
        console.log('Error in favoritesSaga', error);
    }
}

function* favoritesSaga() {
    yield takeLatest('ADD_FAVORITE', addFavorite);
}

export default favoritesSaga;