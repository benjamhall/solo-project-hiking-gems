import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteHike(action) {
    try {
        const response = yield axios.delete('/api/trail', action.payload);
        console.log('get all:', response.data);
        yield put({ type: 'FETCH_TRAILS', payload: trails.data });

    } catch {
        console.log('get all error');
    }
}

function* deleteHikeSaga() {
    yield takeLatest('REMOVE_HIKE', deleteHike);
}

export default deleteHikeSaga;