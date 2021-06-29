import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postHike() {
    try {
        const trails = yield axios.get('/api/trail');
        console.log('get all:', trails.data);
        yield put({ type: 'SET_TRAILS', payload: trails.data });

    } catch {
        console.log('get all error');
    }
}

function* postHikeSaga() {
    yield takeLatest('POST_HIKE', postHike);
}

export default postHikeSaga;