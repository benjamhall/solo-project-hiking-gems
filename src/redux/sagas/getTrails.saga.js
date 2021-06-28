import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAllTrails () {
    try {
        const trails = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_TRAILS', payload: trails.data });

    } catch {
        console.log('get all error');
    }
}

function* getTrailsSaga() {
    yield takeLatest('FETCH_TRAILS', getAllTrails);
}

export default getTrailsSaga;