import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAllTrails () {

}

function* trailSaga() {
    yield takeLatest('FETCH_TRAILS', getAllTrails);
}

export default trailSaga;