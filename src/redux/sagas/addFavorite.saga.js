import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addFavorite() {
    try {
        // Axios request to add hike to the user's favorites
        yield axios.put(`/api/ratings/favorite`, {hikeId: action.payload});
        
        // Fetch all of the existing favorites to update DOM
        yield put({ type: 'FETCH_FAVORITES', payload: action.payload });

    } catch {
        console.log('Error in addFavoriteSaga', error);
    }
}

function* addFavoriteSaga() {
    yield takeLatest('ADD_FAVORITE', addFavorite);
}

export default addFavoriteSaga;