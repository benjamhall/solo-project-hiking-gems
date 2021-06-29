import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postNewHike(action) {
    try {
        const response = yield axios.post('/api/trail', action.payload);
        console.log('get all:', response.data);
        yield put({ type: 'FETCH_TRAILS', payload: trails.data });

    } catch {
        console.log('get all error');
    }
}

function* postHikeSaga() {
    yield takeLatest('POST_HIKE', postNewHike);
}

export default postHikeSaga;