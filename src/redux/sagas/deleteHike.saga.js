import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteHike(action) {
    try {
        yield axios.delete(`/api/trail/${action.payload.id}`, action.payload);
        console.log('get all trails');
        yield put({ type: 'FETCH_TRAILS'});

    } catch {
        console.log('delete saga error');
    }
}

function* deleteHikeSaga() {
    yield takeLatest('REMOVE_HIKE', deleteHike);
}

export default deleteHikeSaga;