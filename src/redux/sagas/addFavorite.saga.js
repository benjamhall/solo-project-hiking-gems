import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addFavorite(action) {
    console.log('made it to addFavorite saga', action.payload)
    try {
        // Axios request to add favorite to the user's favorites
        yield axios.post(`/api/favorite`, {details: action.payload});
        console.log('Favorite', action.payload)
        
        // Fetch all of the existing favorites to update DOM
        yield put({ type: 'FETCH_FAVORITES'});

    } catch(error) {
        console.log('Error in addFavoriteSaga', error);
    }
}

function* addFavoriteSaga() {
    yield takeLatest('ADD_FAVORITE', addFavorite);
}

export default addFavoriteSaga;