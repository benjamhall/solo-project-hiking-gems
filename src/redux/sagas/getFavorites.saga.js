import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFavorites() {
    // console.log('in fetch favorite saga', action)
    try {
        // Axios request to get favorites
        const favorites = yield axios.get(`/api/favorite/`);
        console.log('get all:', favorites.data);

        // Sends Set favorites to the favorite reducer
        yield put({ type: 'SET_FAVORITES', payload: favorites.data });

    } catch {
        console.log('Error in fetchFavoritesSaga', error);
    }
}

function* getFavoritesSaga() {
    yield takeLatest('FETCH_FAVORITES', fetchFavorites);
}

export default getFavoritesSaga;