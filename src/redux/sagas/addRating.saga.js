import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addRating(action) {
  

}

function* addRatingSaga() {
    yield takeLatest('ADD_NEW_RATING', addRating);
}

export default addRatingSaga;